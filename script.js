const magicButton = document.querySelector(".magic")
const progBar = document.querySelector(".progbar")

magicButton.addEventListener("click", function() {
    progBar.animate([
        {
            width: "0%"
        },
        {
            width: "100%"
        }
    ], 2000)
})