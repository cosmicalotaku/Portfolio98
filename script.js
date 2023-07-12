// Importing Header Files
'using strict'

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

    document.getElementById("Time").innerHTML = currentHour + ":" + currentMinutes + " " + currentHours;
}

setInterval(getTime, 1000);
setInterval(getDate, 1000);