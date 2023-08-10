const magicButton = document.getElementById("quest1")
const progBar1 = document.getElementById("progBar1")
const goldTracker = document.getElementById("gold")

const quest2 = document.getElementById("quest2")

function updateGold (earnedGold) {
    let gold = Number(goldTracker.textContent)
    gold += earnedGold
    goldTracker.textContent = gold
    updateQuests()
}

function updateQuests () {
    let gold = Number(goldTracker.textContent)
    if (gold >= 10) (quest2.classList.toggle("hidden"))
}

magicButton.addEventListener("click", function() {
    progBar1.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], 2000);
    setTimeout(() => updateGold(1), 2000);
})