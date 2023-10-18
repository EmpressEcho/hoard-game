const AUTOSAVE_URL = '/autosave';
const AUTOSAVE_INTERVAL_MINUTES = 15;

function handleResponse() {
    console.log(this.responseText);
}

function autosave() {
    const req = new XMLHttpRequest();
    let data = new FormData();
    data.append("input", goldTracker.textContent);
    req.addEventListener("load", handleResponse);
    req.open("POST", AUTOSAVE_URL);
    req.send(data);
}

setInterval(autosave, (AUTOSAVE_INTERVAL_MINUTES * 60000));