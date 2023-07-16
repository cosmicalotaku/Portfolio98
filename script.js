// Importing Header Files
'using strict'

// Bios-Screen Procedure
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
    var biosPost = new Audio("Assets/Bios-Beep.wav");
    biosPost.play();
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

function initialLoad() {
    document.getElementById("Bios-Screen").style.backgroundColor = "#0000fa";
    document.getElementById("Bios-Screen").innerHTML = "";
    var startupSound = new Audio("Assets/Windows-98-startup-sound.wav");
    startupSound.play();
}

function finalLoad() {
    document.getElementById("Extras").hidden = true;
    document.getElementById("Main").hidden = false;
}

function pageLoad() {
    document.getElementById("Alert").hidden = true;

    setTimeout(logoLoad, 1000);
    setTimeout(loadVersionInfo, 2000);
    setTimeout(logoBuild, 3000);
    setTimeout(getBrowserInfo, 4000);
    setTimeout(logoMemory, 5000);
    setTimeout(logoConnection, 6000);
    setTimeout(logoImages, 7000);
    setTimeout(logoOS, 8000);
    setTimeout(logoJoke, 9000);
    setTimeout(initialLoad, 10000);
    setTimeout(finalLoad, 12000);
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

setInterval(getTime, 1000);
setInterval(getDate, 1000);

// Close Window
function playByeByeSound() {
    var shutdown = new Audio("Assets/shutdown.wav")
    shutdown.play();
}

function closeWindow() {
    window.close()
}

function clickedCloseButton() {
    document.getElementById("Close-Window").hidden = false;
}

function returnToMain() {
    document.getElementById("Close-Window").hidden = true;
}

function startClosingProcedure() {
    document.getElementById("Close-Window").style.backgroundColor = "#0000fa";
    setTimeout(playByeByeSound, 2000);
    setTimeout(closeWindow, 6000);
}