const magicButton = document.getElementById("quest1")
const progBar1 = document.getElementById("progBar1")
const goldTracker = document.getElementById("gold")

const quest2 = document.getElementById("quest2")

const storeButton = document.querySelector(".storeButton")
const store = document.querySelector(".store")

const userProfileButton = document.querySelector(".userProfile")
const userProfileOptions = document.querySelector(".userProfileOptions")

function updateGold (earnedGold) {
    let gold = Number(goldTracker.textContent)
    gold += earnedGold
    goldTracker.textContent = gold
    updateQuests()
}

function updateQuests () {
    let gold = Number(goldTracker.textContent)
    if (gold >= 10) (quest2.classList.remove("hidden"))
}

function toggleHidden (element) {
    element.classList.toggle("hidden")
}

magicButton.addEventListener("click", function() {
    progBar1.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], 1000);
    setTimeout(() => updateGold(1), 1000);
})

storeButton.addEventListener("click", function() {
    toggleHidden(store)
    storeButton.textContent === "Visit the Store" ? storeButton.textContent = "Close the Store" : storeButton.textContent = "Visit the Store";
})

userProfileButton.addEventListener("click", function() {
    toggleHidden(userProfileOptions)
})