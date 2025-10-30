//When the console is opened
console.log("Hello, what you doing")
var checkIfBoxThingExists = document.getElementById("boxThing");

//"Butt on" button pressed
let clicks = 0;
function oneFunction() {
    document.getElementById("oneID").innerHTML = "Frankly that's all I will do with this button.";
    ++clicks;
    if (clicks < 3) {
        var intSet = setInterval(function() {
            revert();
        }, 5000);
    } 
    else {
        document.getElementById("inn").disabled = true;
        document.getElementById("inn").style.color = "#FF0000";
        window.open("More/stop.html", "_blank");
        clicks = 0;
        revert();
        clearInterval(intSet);
        document.getElementById("inn").style.backgroundColor = "#FF0000";
        var audio = new Audio('More/low.wav');
        audio.play();
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        document.body.style.backgroundColor = "#BBBBBB";
        document.body.style.transition = "8.0s";
        console.log("Uh oh.")
        document.getElementById("whatThing").style.marginLeft = "50%";
        document.getElementById("whatThing").style.padding = "20px 25px";
        document.getElementById("whatThing").style.fontSize = "26px";
        pressed = "1"
        checkIfBoxThingExists = document.getElementById("boxThing");
        setTimeout(function() {
            if (checkIfBoxThingExists != null) {
                okayButt();
        }}, 2);
    }
}

function revert() {
    document.getElementById("oneID").innerHTML = "This is some random text here I suppose."
    clicks = 0;
}

var pressed = "0";
function okayButt() {
    let container = document.getElementById("boxThing");
    document.getElementById("boxThing").style.opacity = "0";
    let time = 150;
    document.getElementById("boxThing").style.transition = time/1000+"s";
    setTimeout(function() {
        document.body.removeChild(container);
    }, time);
    if (pressed === "0") {
        var playClose = new Audio("More/sound/Close.wav");
        playClose.play();
        playClose.volume = "0.5";
        pressed = "1";
    }
}



const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

if (isFirefox) {
    
}
else {
    document.getElementById("browserCheck").innerHTML = "Make sure the browser is based on firefox please. Some things might break."
}