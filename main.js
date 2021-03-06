/*
@jucetan
*/
"use strict"
let secondsLabel;
let buttonTen;
let justWait;
let dontPanic;
let tenButton;
let totalSeconds = 0;
let periods = "";

window.onload = function() {
    secondsLabel = document.getElementById("counter");
    buttonTen = document.getElementById("button-ten");
    justWait = document.getElementById("just-wait");
    dontPanic = document.getElementById("dont-panic");
}

// ** Interval Calls **
setInterval(justPeriods, 1000);
let secondsOfTime = setInterval(setTime, 1000);


// sets the timer element
function setTime() {

    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds);
    dontPanic.innerHTML = pad(totalSeconds) + " -- Don't Panic!";


    // button appears when counter reaches 10
    if (totalSeconds == 10) {
        buttonTen.innerHTML += "<p>--</p>" + "<p>Hey, you reached 10! Have a button.</p>" + "<button class=\"a-ten-button\">* 10 BUTTON *</button>";
        addEventListeners();

    }
}

// adds the 0 infront of single length numbers to keep it uniform.
function pad(val) {

    let valString = val + "";

    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// animates the 3 periods after just wait...
function justPeriods() {
    justWait.innerHTML = "<p>" + "Just wait for it" + periods + "</p>" + "<p>--</p>";

    if (periods.length <= 2) {
        periods += ".";
    } else {
        periods = "";
    }
}

function addEventListeners() {

    tenButton = document.getElementsByClassName("a-ten-button")[0];

    // button injects 10 seconds to the counter.
    tenButton.addEventListener("mousedown", function() {

        totalSeconds += 10;
        secondsLabel.innerHTML = pad(totalSeconds);
    })

}