const goldTracker = document.getElementById("gold")

// --- Quest Elements ---
const quest1 = document.getElementById("quest1")
const quest2 = document.getElementById("quest2")
const quest3 = document.getElementById("quest3")
const quest4 = document.getElementById("quest4")
const quest5 = document.getElementById("quest5")
const quest6 = document.getElementById("quest6")
const quest7 = document.getElementById("quest7")
const quest8 = document.getElementById("quest8")
const quest9 = document.getElementById("quest9")
const quest10 = document.getElementById("quest10")

// --- Quest Progress Bars ---
const progBarQ1 = document.getElementById("progBar1")
const progBarQ2 = document.getElementById("progBar2")
const progBarQ3 = document.getElementById("progBar3")
const progBarQ4 = document.getElementById("progBar4")
const progBarQ5 = document.getElementById("progBar5")
const progBarQ6 = document.getElementById("progBar6")
const progBarQ7 = document.getElementById("progBar7")
const progBarQ8 = document.getElementById("progBar8")
const progBarQ9 = document.getElementById("progBar9")
const progBarQ10 = document.getElementById("progBar10")

// --- Quest Unlock Levels ---
const questUnlockArray = [
    {
        questElement: quest2,
        unlockThreshold: 10
    },
    {
        questElement: quest3,
        unlockThreshold: 20
    },
    {
        questElement: quest4,
        unlockThreshold: 30
    },
    {
        questElement: quest5,
        unlockThreshold: 40
    },
    {
        questElement: quest6,
        unlockThreshold: 50
    },
    {
        questElement: quest7,
        unlockThreshold: 60
    },
    {
        questElement: quest8,
        unlockThreshold: 70
    },
    {
        questElement: quest9,
        unlockThreshold: 80
    },
    {
        questElement: quest10,
        unlockThreshold: 90
    },
]

// --- Minion Elements ---
const minionKobolds = document.getElementById("minionKobolds")
const minionBandits = document.getElementById("minionBandits")
const minionCultists = document.getElementById("minionCultists")
const minionDragonborn = document.getElementById("minionDragonborn")
const minionElementals = document.getElementById("minionElementals")

// --- Minion Progress Bars ---
const progBarKobolds = document.getElementById("progBarM1")
const progBarBandits = document.getElementById("progBarM2")
const progBarCultists = document.getElementById("progBarM3")
const progBarDragonborn = document.getElementById("progBarM4")
const progBarElementals = document.getElementById("progBarM5")

// --- Store Elements ---
const storeButton = document.querySelector(".storeButton")
const store = document.querySelector(".store")

// --- Store Minions ---
const storeKobolds = document.getElementById("storeKobolds")
const storeBandits = document.getElementById("storeBandits")
const storeCultists = document.getElementById("storeCultists")
const storeDragonborn = document.getElementById("storeDragonborn")
const storeElementals = document.getElementById("storeElementals")

// --- User Profile Elements ---
const userProfileButton = document.querySelector(".userProfile")
const userProfileOptions = document.querySelector(".userProfileOptions")
const userLogin = document.getElementById("userLogin")
const userPrefs = document.getElementById("userPrefs")
const userAchievements = document.getElementById("userAchievements")
const userLogout = document.getElementById("userLogout")

// --------------

function updateGold (earnedGold) {
    let gold = Number(goldTracker.textContent)
    gold += earnedGold
    goldTracker.textContent = gold
    updateQuests()
}

function updateQuests () {
    let gold = Number(goldTracker.textContent);
    for(let i = 0; i <= questUnlockArray.length; i++) {
        if (gold >= questUnlockArray[i].unlockThreshold && questUnlockArray[i].questElement.classList.contains("hidden")) (questUnlockArray[i].questElement.classList.remove("hidden"))
    }
}

function toggleHidden (element) {
    element.classList.toggle("hidden")
}

quest1.addEventListener("click", function() {
    progBar1.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], 1000);
    setTimeout(() => updateGold(10), 1000);
})

storeButton.addEventListener("click", function() {
    toggleHidden(store)
    storeButton.textContent === "Visit the Store" ? storeButton.textContent = "Close the Store" : storeButton.textContent = "Visit the Store";
})

userProfileButton.addEventListener("click", function() {
    toggleHidden(userProfileOptions)
})

let kobolds = 1;

function runKobolds(kobolds) {
    progBarKobolds.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], 2000);
    setTimeout(() => updateGold(kobolds * 5), 2000)
}

let koboldInterval = setInterval(runKobolds, 2000, kobolds)

setTimeout(() => {kobolds = 15; clearInterval(koboldInterval); koboldInterval = setInterval(runKobolds, 2000, kobolds)}, 14000)