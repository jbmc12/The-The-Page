/** This one involves the codes, keep in mind this one should use a lot of stuff from multiple spots
 * ! This could be prone to breaking, so keep that in mind!
 * * For now set up the codes
 * Do you think that the user will read this and kinda ruin the mystery? I believe so! Although it would be nicer if they found their way on their own, it kinda just happens at times.
 */

function readInput() {
    var inputValue = document.getElementById("coderInput").value;
    var codeValue = inputValue.toLowerCase();
    switch(codeValue) {
        case(codeValue = "hello"):
        // * Hello says hello Back
            button1.textContent = "Hello there.";
            break;
        case(codeValue = "penis"):
        // * jokes yes
            button1.textContent = "... Are you serious?";
            setTimeout(function() {
                button1.textContent = "Couldn't you think of anything else?";
            }, 5000);
            setTimeout(function() {
                button1.textContent = "Get out!";
            }, 10000);
            setTimeout(function() {
                window.open("../index.html","_self")
            }, 15000)
            break;
        case(codeValue = "allowmetoclick"):
        // * Allows you to click the main button once.
            if (alreadyUsed === "no") {
                button1.textContent = "Hmm...";
                button1.disabled = false;
            }
            else {
                button1.textContent = "Looks like this code doesn't work anymore...";
            }
            break;
        case(codeValue = "play a sound"):
        // * Plays a random noise.
            button1.textContent = "Well, let me choose a random noise.";
            // * please, add noises to this one
            break;
        case(codeValue = "unfinished"):
        // * since this isn't finished, this plays some credits
            window.open("../Credits/Credits.html", "_self")
            break;
        case(codeValue = "newspaper"):
        // * opens the newspaper page.
            enableNewpaperLink = "yes";
            function runnerUp() {
                if (enableNewpaperLink === "yes") {
                window.open("newspaper/newspaper.html", "_self");
                }
            }
            if (isNullLineEnabled === "yes") {
                Nuller.textContent = "[Link Line]";
                document.getElementById("readLine").style.color = "#7777FF";
                Nuller.addEventListener('click', function() {
                    runnerUp();
                })
            }
            break;
        case(codeValue = "tables"):
        // * creates a button that slowly increases in size
            button1.textContent = "Tables? Heard there are hidden elements there."
            const buttonGrab = document.createElement("button");
            buttonGrab.setAttribute("id", "increasing");
            buttonGrab.setAttribute("onclick", "openTables()");
            buttonGrab.textContent = "⁜";
            document.body.appendChild(buttonGrab);
            setTimeout(function() { 
                document.getElementById("increasing").style.padding = "30px";
                document.getElementById("increasing").style.fontSize = "2000px";
            }, 20);
            break;
        case(codeValue = "hidden"):
        // * ???
            button1.textContent = "We don't talk about that."
            button1.style.color = "red";
            setTimeout(function() {
                hiddenNo();
            }, 2000)
            break;
        case(codeValue = "formations"):
            button1.textContent = "Peculiar page to find I suppose."
            const buttonForm = document.createElement("button");
            buttonForm.setAttribute("id", "increasing");
            buttonForm.setAttribute("onclick", "openForms()");
            buttonForm.textContent = "≡";
            document.body.appendChild(buttonForm);
            setTimeout(function() { 
                document.getElementById("increasing").style.padding = "30px";
                document.getElementById("increasing").style.fontSize = "2000px";
            }, 20);
            setTimeout(function() {
                button1.textContent = "Although, most of its functionality is gone."
                setTimeout(function() {
                    button1.textContent = "It's not like it's used much anyway..."
                }, 5000)
            }, 5000)
            break;
        // * The end.
        case(codeValue = "icallthenexus"):
            nexusEvent = "yes";
            button1.textContent = "Well, Well, Well..."
            setTimeout(() => {
                if (stopTalk == "no") {
                    button1.textContent = "Maybe you found this in the tables, I imagine."
                }
            }, 5000);
            setTimeout(() => {
                if (stopTalk == "no") {
                    button1.textContent = "But this one will not give too much for your curiosity."
                }
            }, 10000);
            setTimeout(() => {
                if (stopTalk == "no") {
                    button1.textContent = "A lot of secrets do pop up a lot there, you know."
                }
            }, 15000);
            break;
        case(codeValue = "sunthenexus"):
            if (nexusEvent == "yes") {
                stopTalk = "yes"
                var uhOh = new Audio("../More/sound/ErrorSound.wav");
                var airAudio = new Audio("../More/low.wav");
                audio.pause();
                uhOh.play();
                uhOh.volume = 0.7;
                airAudio.play();
                airAudio.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                button1.textContent = "what.";
                button1.style.color = "red";
                button1.style.fontSize = "2em";
                setTimeout(() => {
                    button1.textContent = "How did you-";
                    setTimeout(() => {
                        button1.textContent = "Wait, I know what you did!"
                        setTimeout(() => {
                            button1.textContent = "You found that beauty page."
                            setTimeout(() => {
                                button1.textContent = "You really were looking around..."
                                setTimeout(() => {
                                    button1.textContent = "Well... I will show you a bit about the nexus. It's a bit tricky to understand what you are even meant to be doing there."
                                    setTimeout(() => {
                                        button1.textContent = "I could try to create the button. Just know it's not that simple to understand."
                                        setTimeout(() => {
                                            button1.textContent = "Either way... this button... you know, 'me', will give you a pass to the way towards the nexus. Just know it's a tricky path. All you have to do is click me."
                                            button1.disabled = false;
                                            clicks = 10;
                                        }, 7000);
                                    }, 10000);
                                }, 5000);
                            }, 5000);
                        }, 5000);
                    }, 2000);
                }, 2000);
            }
            break;
    }
}

function openTables() {
    window.open("tables/tables.html", "_self");
}

function openForms() {
    window.open("formations/formations.html" , "_self");
}

var nexusEvent = "no";
var stopTalk = "no";