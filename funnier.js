/**This for the hidden button that you can only see if you look at the right of the screen
 * 
 * 
 * 
 * 
 * */
let clicks1 = 0

function whatThing() {
    if (clicks1 < 1) {
        console.log("Hello, this thing does nothing.");
        clicks1++
    }
    else {
        clicks1++
    }
}

function whatThingDouble() {
    if (clicks1 > 20) {
        console.log("Imagine spam clicking this thing.");
    }
    if(clicks1 > 50) {
        document.getElementById("whatThing").disabled = true;
        console.log("Okay, Okay, so like, you want this thing to do something? Sure thing, here's a button for you.")
        const newButton = document.createElement("button");
        newButton.setAttribute("id", "parsing");
        newButton.setAttribute("onclick", "parsing()");
        newButton.textContent = "Click this!!!";
        document.body.appendChild(newButton);
        var glimmer = new Audio('More/sound/Glimmer.wav');
        glimmer.play();
    }
}

function parsing() {
    window.open("Further/Welcome.html", "_self")
}