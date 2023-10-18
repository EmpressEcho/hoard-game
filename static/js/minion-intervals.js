function minionPayout(numberTracker, minionGold) {
    let minionNumber = Number(numberTracker.textContent);
    let payout = minionNumber * minionGold;
    if (payout > 0) {
        updateGold(payout);
    }
    console.log(payout)
}

function createMinionInterval(minion) {
    if (!minion.interval) {
        minion.interval = setInterval(minionPayout, minion.delay, minion.numTracker, minion.value)
        console.log("interval created!")
    }
}

for (let i = 0; i < minionArray.length; i++) {
    createMinionInterval(minionArray[i])
}