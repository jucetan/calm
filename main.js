let secondsLabel = document.getElementById("counter");
let buttonTen = document.getElementById("button-ten");
let justWait = document.getElementById("just-wait");
let totalSeconds = 0;
let periods = "";

// ** Interval Calls **
setInterval(justPeriods, 1000);
setInterval(setTime, 1000);


// sets the timer element
function setTime(){

    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds);

    // button appears when counter reaches 10
    if (totalSeconds == 10) {
        buttonTen.innerHTML += "<p>--</p>" + "<p>Hey, you reached 10! Have a button.</p>" + "<button class=\"a-ten-button\">* 10 BUTTON *</button>";
    }
}

// adds the 0 infront of single length numbers to keep it uniform.
function pad(val){

        let valString = val + "";

        if(valString.length < 2){
        return "0" + valString;
    } else {
        return valString;
    }
}

// animates the 3 periods after just wait...
function justPeriods() {    
    justWait.innerHTML = "<p>" + "Just wait for it" + periods + "</p>";

    if (periods.length <= 2) {
        periods += ".";    
    } else {
        periods = "";
    }
}


