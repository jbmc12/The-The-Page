console.log("Welcome user, this might find this a bit unexpected, but there's a lot to this than just a simple page you would see every day from some random programmer amateur.")
console.log("There are more things in this page, maybe you can find them if you use something known as... oh, maybe that would be too much.")

//Set up variables to create elements
const newButton = document.createElement("button");
const newSpan = document.createElement("span");
const newInput = document.createElement("input");
var alreadyUsed = "no";
var isNullLineEnabled = "no";
var Nuller = "";
var enableNewpaperLink = "no";

/**Switch case for the button 
 * * Make sure to finish it at some point!
 * ! Just be careful with the variables and use let if necessary
 * ? What do you want to do here?
 * TODO: finish the switch case make it like very weird
*/
const button1 = document.getElementById("iftheywouldknow");
var clicks = 0;
button1.addEventListener('click', function() {
    ++clicks
    switch(clicks) {
        case clicks = 1:
            button1.textContent = "Hello there";
            break;
        case clicks = 2:
            button1.textContent = "You found the hidden button...";
            break;
        case clicks = 3:
            button1.textContent = "So what is it that you want here?";
            break;
        case clicks = 4:
            button1.textContent = "You really did have to click the button on the other page a lot to make this appear.";
            break;
        case clicks = 5:
            button1.textContent = "Yet here you are, pressing this button";
            break;
        case clicks = 6:
            button1.textContent = "I don't recommend spamming this one... something bad might happen.";
            break;
        case clicks = 7:
            button1.textContent = "So what if I... maybe make something for you. Here.";
            break;
        case clicks = 8:
            button1.disabled = true;
            button1.textContent = "There.";
            newButton.setAttribute("id", "giveInput");
            newButton.textContent = "Input Add";
            document.body.appendChild(newButton);
                document.getElementById("giveInput").addEventListener('click', function() {
                    button1.textContent = "This will give you the ability to input text. Don't expect it to work for everything... Some codes could reveal something new.";
                    document.getElementById("giveInput").disabled = true;
                    newInput.setAttribute("placeholder", "...");
                    newInput.setAttribute("id", "coderInput");
                    document.body.appendChild(newInput);
                    document.getElementById("coderInput").addEventListener('keypress', function(event) {
                        if (event.key === 'Enter') {
                            readInput();
                        }
                    });
                })
            break;
        case clicks = 9:
            button1.textContent = "You got it. I guess you noticed this button was doing nothing until you input that code... let me show you one little thing... just wait a bit."
            alreadyUsed = "yes";
            isNullLineEnabled = "yes"
            setTimeout(function() {
                newSpan.textContent = "[Null Line]";
                newSpan.setAttribute("id", "readLine");
                document.body.appendChild(newSpan);
                button1.textContent = "This is a little special line. Now it doesn't do anything yet, but maybe it could be of use if you do something specific.";
                Nuller = document.getElementById("readLine");
                clicks = 9;
            }, 20000)
            break;
        case clicks = 10:
            clicks = 9;
            break;
        case clicks = 11:
            window.open("../Nexus/prenexus.html", "_self");
            break;
    }
})

/**In the case that the user spams the button
 * ! Be careful to not spam when testing, make this code a comment if it gets annoying.
 * */
button1.addEventListener('dblclick', function() {
    document.documentElement.innerHTML = '';
    audio.pause();
    var errorNoise = new Audio("audio/Do not.wav");
    errorNoise.play();
    errorNoise.volume = 0.5;
    setTimeout(function() {
        var newOne = document.createElement("h1");
        newOne.textContent = "Do not.";
        document.body.appendChild(newOne);
        var newRestart = document.createElement("button");
        newRestart.textContent = "Go back.";
        newRestart.setAttribute("id", "backOut");
        document.body.appendChild(newRestart);
        var backOut = document.getElementById("backOut");
        backOut.addEventListener('click', function() {
            window.location.reload();
        })
        }, 1000)
    }
)

function hiddenNo() {
    document.documentElement.innerHTML = '';
    audio.pause();
    var errorNoise = new Audio("audio/Do not.wav");
    errorNoise.play();
    errorNoise.volume = 0.5;
    setTimeout(function() {
        var newOne = document.createElement("h1");
        newOne.textContent = "Don't Ask.";
        document.body.appendChild(newOne);
        var newRestart = document.createElement("button");
        newRestart.textContent = "Go back.";
        newRestart.setAttribute("id", "backOut");
        document.body.appendChild(newRestart);
        var backOut = document.getElementById("backOut");
        backOut.addEventListener('click', function() {
            window.location.reload();
        })
        }, 1000)
    }