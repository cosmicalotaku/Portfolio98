// Importing Header Files
'using strict'

// Bios-Screen
// Detecting Browser
function getBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browserName;
         
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chromium";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Error Browser Not Found";
    }

    document.getElementById("Browser").hidden = false;
    document.getElementById("Browser").innerHTML = "Browser Engine: " + browserName;
}

function logoLoad() {
    document.getElementById("Energy-Star-Logo").hidden = false;
}

function loadVersionInfo() {
    document.getElementById("Project-Name").hidden = false;
    document.getElementById("Copyright").hidden = false;
    document.getElementById("Loading-Profile").hidden = false;
}

function logoBuild() {
    document.getElementById("Build").hidden = false;
}

function logoMemory() {
    document.getElementById("Memory").hidden = false;
}

function logoConnection() {
    document.getElementById("Connection").hidden = false;
}

function logoImages() {
    document.getElementById("Images").hidden = false;
}

function logoOS() {
    document.getElementById("OS").hidden = false;
}

function logoJoke() {
    document.getElementById("Joke").hidden = false;
}

function finalLoad() {
    document.getElementById("Extras").hidden = true;
    document.getElementById("Main").hidden = false;
}

// Footer-Taskbar Date
function getDate() {
    var Month = new Date().getMonth() + 1;
    var Day = new Date().getDate();
    var Year = new Date().getFullYear();

    document.getElementById("Date").innerHTML = Month + "/" + Day + "/" + Year;
}

function getTime() {
    var currentHour = new Date().getHours();
    var currentMinutes = new Date().getMinutes();
    var currentHours;

    if (currentHour >= 12) {
        currentHours = "PM";
    } else {
        currentHours = "AM";
    }

    if (currentHour == 0) {
        currentHour = 12;
    } else if (currentHour < 10) {
        currentHour = "0" + currentHour.toString();
    }

    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes.toString();
    }

    document.getElementById("Time").innerHTML = currentHour + ":" + currentMinutes + " " + currentHours;
}

setInterval(logoLoad, 1000);
setInterval(loadVersionInfo, 2000);
setInterval(logoBuild, 3000);
setInterval(getBrowserInfo, 5000);
setInterval(logoMemory, 7000);
setInterval(logoConnection, 9000);
setInterval(logoImages, 11000);
setInterval(logoOS, 13000);
setInterval(logoJoke, 15000);
setInterval(finalLoad, 17000);

setInterval(getTime, 1000);
setInterval(getDate, 1000);