const magicButton = document.getElementById("quest1")
const progBar1 = document.getElementById("progBar1")
const goldTracker = document.getElementById("gold")

function updateGold (earnedGold) {
    let gold = Number(goldTracker.textContent)
    gold += earnedGold
    goldTracker.textContent = gold
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
    setTimeout(() => updateGold(2), 2000);
})