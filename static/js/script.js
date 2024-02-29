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
const progBarQ1 = document.getElementById("progBar_quest1");
const progBarQ2 = document.getElementById("progBar_quest2");
const progBarQ3 = document.getElementById("progBar_quest3");
const progBarQ4 = document.getElementById("progBar_quest4");
const progBarQ5 = document.getElementById("progBar_quest5");
const progBarQ6 = document.getElementById("progBar_quest6");
const progBarQ7 = document.getElementById("progBar_quest7");
const progBarQ8 = document.getElementById("progBar_quest8");
const progBarQ9 = document.getElementById("progBar_quest9");
const progBarQ10 = document.getElementById("progBar_quest10");

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
    reward: 10,
    delay: 2000
};
const quest3 = {
    element: quest3Element,
    progBar: progBarQ3,
    reward: 40,
    delay: 4000
};
const quest4 = {
    element: quest4Element,
    progBar: progBarQ4,
    reward: 150,
    delay: 10000
};
const quest5 = {
    element: quest5Element,
    progBar: progBarQ5,
    reward: 300,
    delay: 15000
};
const quest6 = {
    element: quest6Element,
    progBar: progBarQ6,
    reward: 625,
    delay: 25000
};
const quest7 = {
    element: quest7Element,
    progBar: progBarQ7,
    reward: 1200,
    delay: 40000
};
const quest8 = {
    element: quest8Element,
    progBar: progBarQ8,
    reward: 2500,
    delay: 70000
};
const quest9 = {
    element: quest9Element,
    progBar: progBarQ9,
    reward: 4000,
    delay: 100000
};
const quest10 = {
    element: quest10Element,
    progBar: progBarQ10,
    reward: 10000,
    delay: 200000
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
const NumKoboldTracker = document.getElementById("minionNum1");
const NumBanditTracker = document.getElementById("minionNum2");
const NumCultistTracker = document.getElementById("minionNum3");
const NumDragonbornTracker = document.getElementById("minionNum4");
const NumElementalTracker = document.getElementById("minionNum5");

// // --- Store Elements ---
const storeButton = document.querySelector(".storeButton");
const store = document.querySelector(".store");

// --- Store Minions ---
const storeKobolds = document.getElementById("storeKobold");
const storeKoboldTitle = document.querySelector("#storeKobold .storeMinionsHeader .title");
const storeKoboldPrice = document.querySelector("#storeKobold .storeMinionsHeader .price");
const storeKoboldBio = document.querySelector("#storeKobold .storeMinionsBio");

const storeBandits = document.getElementById("storeBandit");
const storeBanditTitle = document.querySelector("#storeBandit .storeMinionsHeader .title");
const storeBanditPrice = document.querySelector("#storeBandit .storeMinionsHeader .price");
const storeBanditBio = document.querySelector("#storeBandit .storeMinionsBio");

const storeCultists = document.getElementById("storeCultist");
const storeCultistTitle = document.querySelector("#storeCultist .storeMinionsHeader .title");
const storeCultistPrice = document.querySelector("#storeCultist .storeMinionsHeader .price");
const storeCultistBio = document.querySelector("#storeCultist .storeMinionsBio");

const storeDragonborn = document.getElementById("storeDragonborn");
const storeDbornTitle = document.querySelector("#storeDragonborn .storeMinionsHeader .title");
const storeDbornPrice = document.querySelector("#storeDragonborn .storeMinionsHeader .price");
const storeDbornBio = document.querySelector("#storeDragonborn .storeMinionsBio");

const storeElementals = document.getElementById("storeElemental");
const storeElementalTitle = document.querySelector("#storeElemental .storeMinionsHeader .title");
const storeElementalPrice = document.querySelector("#storeElemental .storeMinionsHeader .price");
const storeElementalBio = document.querySelector("#storeElemental .storeMinionsBio");

// --- Minion Intervals ---
let koboldInterval;
let banditInterval;
let cultistInterval;
let dragonbornInterval;
let elementalInterval;

// --- Minion Variables ---
let kobolds = {
    name: "Kobold",
    number: Number(NumKoboldTracker.textContent),
    delay: 2000,
    value: 1,
    cost: 10,
    numTracker: NumKoboldTracker,
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
    number: Number(NumBanditTracker.textContent),
    delay: 2000,
    value: 3,
    cost: 20,
    numTracker: NumBanditTracker,
    storeElement: storeBandits,
    storeTitle: storeBanditTitle,
    storePrice: storeBanditPrice,
    storeBio: storeBanditBio,
    element: minionBandits,
    interval: banditInterval,
    unlockDescription: "The first bandit has arrived, with plans to extort the local towns if you pay them!"
};
let cultists = {
    name: "Cultist",
    number: Number(NumCultistTracker.textContent),
    delay: 2000,
    value: 6,
    cost: 30,
    numTracker: NumCultistTracker,
    storeElement: storeCultists,
    storeTitle: storeCultistTitle,
    storePrice: storeCultistPrice,
    storeBio: storeCultistBio,
    element: minionCultists,
    interval: cultistInterval,
    unlockDescription: "The first cultist has sworn their oath to you, pledging to do your bidding and grow your hoard!"
};
let dragonborn = {
    name: "Dragonborn",
    number: Number(NumDragonbornTracker.textContent),
    delay: 2000,
    value: 9,
    cost: 40,
    numTracker: NumDragonbornTracker,
    storeElement: storeDragonborn,
    storeTitle: storeDbornTitle,
    storePrice: storeDbornPrice,
    storeBio: storeDbornBio,
    element: minionDragonborn,
    interval: dragonbornInterval,
    unlockDescription: "The first dragonborn has found their way to you, swearing to fight for you if you'll have them!"
};
let elementals = {
    name: "Elemental",
    number: Number(NumElementalTracker.textContent),
    delay: 2000,
    value: 12,
    cost: 50,
    numTracker: NumElementalTracker,
    storeElement: storeElementals,
    storeTitle: storeElementalTitle,
    storePrice: storeElementalPrice,
    storeBio: storeElementalBio,
    element: minionElementals,
    interval: elementalInterval,
    unlockDescription: "The power to create elementals has unlocked itself within you!"
};
let minionArray = [kobolds, bandits, cultists, dragonborn, elementals];

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

function updateMinionElement (minion) {
    if (minion.element.classList.contains("hidden")) (minion.element.classList.remove("hidden"));
    minion.numTracker.textContent = minion.number;
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
            updateMinionElement(minionArray[i]);
        }
    })
}