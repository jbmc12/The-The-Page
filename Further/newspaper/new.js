var newInput = document.createElement("input");
var newButton = document.createElement("button");
const vibeyaudio = new Audio("Newvibey.wav");
const vibeyMEGAaudio = new Audio("NewMEGAVibey.wav");

function thatInput() {
    newInput.setAttribute("id", "inputYourName");
    newInput.setAttribute("placeholder", "Enter Your Name");
    document.body.appendChild(newInput);
    newButton.setAttribute("id", "vibeyButtonInsert");
    newButton.textContent = "Enter";
    newButton.setAttribute("onclick", "vibeyActive()");
    document.body.appendChild(newButton);
    var whatThe = document.getElementById("whatThe");
    whatThe.disabled = true;
    whatThe.style.color = "white";
}