import os
from flask import (
    Flask,
    render_template,
    abort,
    request,
    session,
    flash,
    redirect,
    url_for
)
from passlib.hash import pbkdf2_sha256
from pymongo import MongoClient

def create_list(raw_data, expected_sort):
    # pass
    result = []

    for x in expected_sort:
      for y in raw_data:
          if y.id == x:
              result.append(y)

    return result

def create_app():
    app = Flask(__name__)
    client = MongoClient(os.getenv("MONGODB_URI"))
    app.db = client["hoard-project"]
    app.secret_key = os.getenv("SECRET_KEY")

    @app.route("/")
    def home():
        quests = app.db.quests.find({})
        minions = app.db.minions.find({})
        store_minions = app.db.store_minions.find({})

        sorted_quests = ["quest1", "quest2", "quest3", "quest4", "quest5", "quest6", "quest7", "quest8", "quest9", "quest10"]
        sorted_minions = ["minionKobolds", "minionBandits", "minionCultists", "minionDragonborn", "minionElementals"]
        sorted_store_minions = ["storeKobold", "storeBandit", "storeCultist", "storeDragonborn", "storeElemental"]

        kwargs = {
            "quests": create_list(quests, sorted_quests),
            "minions": create_list(minions, sorted_minions),
            "store_minions": create_list(store_minions, sorted_store_minions),
        }

        if session.get("email"):
            user = app.db.users.find_one({"email": session["email"]})
            unlockedMinions = []
            for minion in user["minions"]:
                if user["minions"][minion] > 0:
                    unlockedMinions.append(minion)
            userKwargs = {
                "displayName": user["displayName"],
                "theme": user["theme"],
                "gold": user["gold"],
                "userIcon": user["pfp"],
                "userQuests": user["quests"],
                "userMinions": user["minions"]
            }
            return render_template("game.html", headerTitle="Hoard", **kwargs, **userKwargs)

        return render_template("game.html", gold=0, headerTitle="Hoard", theme="green", userQuests=["quest1"], userMinions={"minionKobolds":0, "minionBandits":0, "minionCultists":0, "minionDragonborn":0, "minionElementals":0}, **kwargs)
    
    @app.route("/login", methods=["GET", "POST"])
    def login():
        if request.method == "POST":
            email = request.form.get("email")
            pwd = request.form.get("password")
            user = app.db.users.find_one({"email": email})

            if pbkdf2_sha256.verify(pwd, user["password"]):
                session["email"] = email
                return redirect(url_for("home"))
            flash("Incorrect username or password!")
        return render_template("form.html", headerTitle="Log in", displayName="Test", theme="green")
    
    @app.route("/signup", methods=["GET", "POST"])
    def signup():
        if request.method == "POST":
            email = request.form.get("email")
            pwd1 = request.form.get("password")
            pwd2 = request.form.get("confirmPassword")

            if pwd1 == pwd2:
                pwd = pbkdf2_sha256.hash(pwd1)
                if not app.db.users.find_one({"email": email}):
                    app.db.users.insert_one({
                        "email": email,
                        "password": pwd,
                        "gold": 0,
                        "displayName": email,
                        "theme": "green",
                        "pfp": "static/images/hoard-icon-placeholder.png",
                        "achievements": [],
                        "minions": {"minionKobolds":0, "minionBandits":0, "minionCultists":0, "minionDragonborn":0, "minionElementals":0},
                        "quests": ["quest1"],
                        "store_minions": []
                    })

                    session["email"] = email
                    return redirect(url_for("home"))
                else:
                    flash("User account already exists!")
            else:
                flash("Passwords did not match!")
        return render_template("form.html", headerTitle="Sign up", displayName="Test", theme="green")
    
    @app.route("/logout")
    def logout():
        session.clear()
        return redirect(url_for("home"))
    
    @app.route("/preferences", methods=["GET", "POST"])
    def preferences():
        if request.method == "POST":
            query = {"email": session["email"]}

            if request.form.get("displayName"):
                app.db.users.update_one(
                    query,
                    {"$set": {
                        "displayName": request.form.get("displayName")
                    }}
                )

            if request.form.get("email"):
                app.db.users.update_one(
                    query,
                    {"$set": {
                        "email": request.form.get("email")
                    }}
                )

            if request.form.get("password"):
                password = request.form.get("password")
                confPassword = request.form.get("confirmPassword")
                if password == confPassword:
                    pwd = pbkdf2_sha256.hash(password)
                    app.db.users.update_one(
                        query,
                        {"$set": {
                            "password": pwd
                        }}
                    )
                    session.clear()
                    return redirect(url_for("home"))
                
            if request.form.get("theme"):
                app.db.users.update_one(
                    query,
                    {"$set": {
                        "theme": request.form.get("theme")
                    }}
                )

            if request.form.get("pfp"):
                app.db.users.update_one(
                    query,
                    {"$set": {
                        "pfp": request.form.get("pfp")
                    }}
                )
        
        user = app.db.users.find_one({"email": session["email"]})
        userKwargs = {
            "displayName": user["displayName"],
            "theme": user["theme"],
            "gold": user["gold"],
            "userIcon": user["pfp"]
        }

        return render_template("preferences.html", headerTitle="Preferences", **userKwargs)
    
    @app.route("/achievements")
    def achievements():
        achievementsList = list(app.db.achievements.find({}))
        user = app.db.users.find_one({"email": session["email"]})
        userKwargs = {
            "displayName": user["displayName"],
            "theme": user["theme"],
            "gold": user["gold"],
            "userIcon": user["pfp"],
            "unlockedAchievements": user["achievements"]
        }
        return render_template("achievements.html", headerTitle="Achievements", achievementsList=achievementsList, **userKwargs)
    
    @app.route("/autosave", methods=["POST"])
    def autosave():
        print("YESSSSSSSSS")
        data = request.values.get('input')
        if session.get("email"):
            app.db.users.update_one(
                {"email": session["email"]},
                {"$set": {
                    "gold": int(data)
                }}
            )
        return data

    return app