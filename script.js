const goldTracker = document.getElementById("gold");

// --- Quest Elements ---
const quest1Element = document.getElementById("quest1");
const quest2Element = document.getElementById("quest2");
const quest3Element = document.getElementById("quest3");
const quest4Element = document.getElementById("quest4");
const quest5Element = document.getElementById("quest5");
const quest6Element = document.getElementById("quest6");
const quest7Element = document.getElementById("quest7");
const quest8Element = document.getElementById("quest8");
const quest9Element = document.getElementById("quest9");
const quest10Element = document.getElementById("quest10");

// --- Quest Progress Bars ---
const progBarQ1 = document.getElementById("progBar1");
const progBarQ2 = document.getElementById("progBar2");
const progBarQ3 = document.getElementById("progBar3");
const progBarQ4 = document.getElementById("progBar4");
const progBarQ5 = document.getElementById("progBar5");
const progBarQ6 = document.getElementById("progBar6");
const progBarQ7 = document.getElementById("progBar7");
const progBarQ8 = document.getElementById("progBar8");
const progBarQ9 = document.getElementById("progBar9");
const progBarQ10 = document.getElementById("progBar10");

// --- Quest Variables ---
const quest1 = {
    element: quest1Element,
    progBar: progBarQ1,
    reward: 3,
    delay: 1000
};
const quest2 = {
    element: quest2Element,
    progBar: progBarQ2,
    reward: 1,
    delay: 1000
};
const quest3 = {
    element: quest3Element,
    progBar: progBarQ3,
    reward: 1,
    delay: 1000
};
const quest4 = {
    element: quest4Element,
    progBar: progBarQ4,
    reward: 1,
    delay: 1000
};
const quest5 = {
    element: quest5Element,
    progBar: progBarQ5,
    reward: 1,
    delay: 1000
};
const quest6 = {
    element: quest6Element,
    progBar: progBarQ6,
    reward: 1,
    delay: 1000
};
const quest7 = {
    element: quest7Element,
    progBar: progBarQ7,
    reward: 1,
    delay: 1000
};
const quest8 = {
    element: quest8Element,
    progBar: progBarQ8,
    reward: 1,
    delay: 1000
};
const quest9 = {
    element: quest9Element,
    progBar: progBarQ9,
    reward: 1,
    delay: 1000
};
const quest10 = {
    element: quest10Element,
    progBar: progBarQ10,
    reward: 1,
    delay: 1000
};
const questArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];

// --- Quest Unlock Levels ---
const questUnlockArray = [
    {
        questElement: quest2Element,
        unlockThreshold: 100
    },
    {
        questElement: quest3Element,
        unlockThreshold: 500
    },
    {
        questElement: quest4Element,
        unlockThreshold: 1000
    },
    {
        questElement: quest5Element,
        unlockThreshold: 2000
    },
    {
        questElement: quest6Element,
        unlockThreshold: 4000
    },
    {
        questElement: quest7Element,
        unlockThreshold: 10000
    },
    {
        questElement: quest8Element,
        unlockThreshold: 20000
    },
    {
        questElement: quest9Element,
        unlockThreshold: 50000
    },
    {
        questElement: quest10Element,
        unlockThreshold: 100000
    },
];

// --- Minion Elements ---
const minionKobolds = document.getElementById("minionKobolds");
const minionBandits = document.getElementById("minionBandits");
const minionCultists = document.getElementById("minionCultists");
const minionDragonborn = document.getElementById("minionDragonborn");
const minionElementals = document.getElementById("minionElementals");

// --- Minion Progress Bars ---
const progBarKobolds = document.getElementById("progBarM1");
const progBarBandits = document.getElementById("progBarM2");
const progBarCultists = document.getElementById("progBarM3");
const progBarDragonborn = document.getElementById("progBarM4");
const progBarElementals = document.getElementById("progBarM5");

// --- Store Elements ---
const storeButton = document.querySelector(".storeButton");
const store = document.querySelector(".store");

// --- Store Minions ---
const storeKobolds = document.getElementById("storeKobolds");
const storeKoboldTitle = document.querySelector("#storeKobolds .storeMinionsHeader .title");
const storeKoboldPrice = document.querySelector("#storeKobolds .storeMinionsHeader .price");
const storeKoboldBio = document.querySelector("#storeKobolds .storeMinionsBio");

const storeBandits = document.getElementById("storeBandits");
const storeBanditTitle = document.querySelector("#storeBandits .storeMinionsHeader .title");
const storeBanditPrice = document.querySelector("#storeBandits .storeMinionsHeader .price");
const storeBanditBio = document.querySelector("#storeBandits .storeMinionsBio");

const storeCultists = document.getElementById("storeCultists");
const storeCultistTitle = document.querySelector("#storeCultists .storeMinionsHeader .title");
const storeCultistPrice = document.querySelector("#storeCultists .storeMinionsHeader .price");
const storeCultistBio = document.querySelector("#storeCultists .storeMinionsBio");

const storeDragonborn = document.getElementById("storeDragonborn");
const storeDbornTitle = document.querySelector("#storeDragonborn .storeMinionsHeader .title");
const storeDbornPrice = document.querySelector("#storeDragonborn .storeMinionsHeader .price");
const storeDbornBio = document.querySelector("#storeDragonborn .storeMinionsBio");

const storeElementals = document.getElementById("storeElementals");
const storeElementalTitle = document.querySelector("#storeElementals .storeMinionsHeader .title");
const storeElementalPrice = document.querySelector("#storeElementals .storeMinionsHeader .price");
const storeElementalBio = document.querySelector("#storeElementals .storeMinionsBio");

// --- Minion Intervals ---
let koboldInterval = null;
let banditInterval = null;
let cultistInterval = null;
let dragonbornInterval = null;
let elementalInterval = null;

// --- Minion Variables ---
let kobolds = {
    name: "Kobold",
    number: 0,
    delay: 2000,
    value: 1,
    cost: 10,
    progBar: progBarKobolds,
    storeElement: storeKobolds,
    storeTitle: storeKoboldTitle,
    storePrice: storeKoboldPrice,
    storeBio: storeKoboldBio,
    element: minionKobolds,
    interval: koboldInterval,
    unlockDescription: "The first kobold has arrived, offering to help build your hoard in exchange for a little gold!"
};
let bandits = {
    name: "Bandit",
    number: 0,
    delay: 2000,
    value: 3,
    cost: 20,
    progBar: progBarBandits,
    storeElement: storeBandits,
    storeTitle: storeBanditTitle,
    storePrice: storeBanditPrice,
    storeBio: storeBanditBio,
    element: minionBandits,
    interval: banditInterval,
    unlockDescription: "The first kobold has arrived, offering to help build your hoard in exchange for a little gold!"
};
let cultists = {
    name: "Cultist",
    number: 0,
    delay: 2000,
    value: 3,
    cost: 30,
    progBar: progBarCultists,
    storeElement: storeCultists,
    storeTitle: storeCultistTitle,
    storePrice: storeCultistPrice,
    storeBio: storeCultistBio,
    element: minionCultists,
    interval: cultistInterval,
    unlockDescription: "The first kobold has arrived, offering to help build your hoard in exchange for a little gold!"
};
let dragonborn = {
    name: "Dragonborn",
    number: 0,
    delay: 2000,
    value: 3,
    cost: 40,
    progBar: progBarDragonborn,
    storeElement: storeDragonborn,
    storeTitle: storeDbornTitle,
    storePrice: storeDbornPrice,
    storeBio: storeDbornBio,
    element: minionDragonborn,
    interval: dragonbornInterval,
    unlockDescription: "The first kobold has arrived, offering to help build your hoard in exchange for a little gold!"
};
let elementals = {
    name: "Elemental",
    number: 0,
    delay: 2000,
    value: 3,
    cost: 50,
    progBar: progBarElementals,
    storeElement: storeElementals,
    storeTitle: storeElementalTitle,
    storePrice: storeElementalPrice,
    storeBio: storeElementalBio,
    element: minionElementals,
    interval: elementalInterval,
    unlockDescription: "The first kobold has arrived, offering to help build your hoard in exchange for a little gold!"
};
let minionArray = [kobolds, bandits, cultists, dragonborn, elementals];

// --- User Profile Elements ---
const userProfileButton = document.querySelector(".userProfile");
const userProfileOptions = document.querySelector(".userProfileOptions");
const userLogin = document.getElementById("userLogin");
const userPrefs = document.getElementById("userPrefs");
const userAchievements = document.getElementById("userAchievements");
const userLogout = document.getElementById("userLogout");

// --- Alert Elements ---
const alertElement = document.querySelector(".alert")
const alertTitle = document.querySelector(".alertTitle")
const alertBody = document.querySelector(".alertBody")
const alertClose = document.querySelector(".alertClose")

// --------------

function updateGold (earnedGold) {
    let gold = Number(goldTracker.textContent);
    gold += earnedGold;
    goldTracker.textContent = gold;
    updateQuests(gold);
    updateMinionsInStore(gold);
};

function updateQuests (gold) {
    for(let i = 0; i < questUnlockArray.length; i++) {
        if (gold >= questUnlockArray[i].unlockThreshold && questUnlockArray[i].questElement.classList.contains("hidden")) (questUnlockArray[i].questElement.classList.remove("hidden"));
    }
};

function updateMinionInterval (minionInterval, minion) {
    clearInterval(minionInterval);
    minionInterval = setInterval(runMinion, minion.delay, minion);
}

function updateMinionElement (minionElement) {
    if (minionElement.classList.contains("hidden")) (minionElement.classList.remove("hidden"));

}

function showAlert (title, body) {
    alertTitle.textContent = title;
    alertBody.textContent = body;
    toggleHidden(alertElement)
}

function updateMinionsInStore (gold) {
    for (let i = 0; i < minionArray.length; i++) {
        if (gold >= minionArray[i].cost && minionArray[i].storeElement.classList.contains("locked")) {
            minionArray[i].storeElement.classList.remove("locked");
            showAlert(`New Minion Unlocked: ${minionArray[i].name}!`, `${minionArray[i].unlockDescription}`);
            minionArray[i].storeTitle.textContent = minionArray[i].name;
            minionArray[i].storePrice.textContent = `${minionArray[i].cost}g`
            toggleHidden(minionArray[i].storeBio)
        }
    }
}

function runMinion(minion) {
    minion.progBar.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], minion.delay);
    setTimeout(() => updateGold(minion.number * minion.value), minion.delay);
}

function toggleHidden (element) {
    element.classList.toggle("hidden");
};

for (let i = 0; i < questArray.length; i++) {
    questArray[i].element.addEventListener("click", function() {
        questArray[i].progBar.animate([
            {
                width: "0%"
            },
            {
                width: "100%"
            }
        ], questArray[i].delay);
        setTimeout(() => updateGold(questArray[i].reward), questArray[i].delay);
    })
}

storeButton.addEventListener("click", function() {
    toggleHidden(store);
    storeButton.textContent === "Visit the Store" ? storeButton.textContent = "Close the Store" : storeButton.textContent = "Visit the Store";
})

for (let i = 0; i < minionArray.length; i++) {
    minionArray[i].storeElement.addEventListener("click", function() {
        if (Number(goldTracker.textContent) >= minionArray[i].cost) {
            updateGold(0-minionArray[i].cost);
            minionArray[i].number++
            updateMinionElement(minionArray[i].element);
            updateMinionInterval(minionArray[i].interval, minionArray[i]);
        }
    })
}

userProfileButton.addEventListener("click", function() {
    toggleHidden(userProfileOptions);
})

alertClose.addEventListener("click", function() {
    toggleHidden(alertElement)
})