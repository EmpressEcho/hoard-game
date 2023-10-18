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

function showAlert (title, body) {
    alertTitle.textContent = title;
    alertBody.textContent = body;
    toggleHidden(alertElement)
}

function toggleHidden (element) {
    element.classList.toggle("hidden");
};

userProfileButton.addEventListener("click", function() {
    toggleHidden(userProfileOptions);
})

alertClose.addEventListener("click", function() {
    toggleHidden(alertElement)
})