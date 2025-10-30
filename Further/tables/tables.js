// * Clears input upon reloading page.
function clearInp() {
    document.getElementById("listener").value = "";
}
clearInp();

// * Event for the "color" element.
const colorTex = document.getElementById("colorTex");
function colorText() {
    setTimeout(function() {
        colorText();
    }, 100);
    
    colorTex.style.color = 'rgb('+r+','+g+','+b+')';
}

// * Event for the rapidly changing text element.
const veryTex = document.getElementById("veryTex");
var veryTexts = "no";
veryTex.addEventListener('click', function(event) {
    if (veryTexts == "no") {
        veryTexts = "yes";
    } else {
        veryTexts = "no";
        setTimeout(function() {
            for (let i = 0; i < timeoutsText.length; i++) {
                clearTimeout(timeoutsText[i]);
            }
        }, 1)
    }
});

// ! Setup array.
var timeoutsText = [];
function veryText() {
    timeoutsText.push(setTimeout(function() {
    if (veryTexts == "yes") {
        veryTex.textContent = "ColorsEqual";
    }
    timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "WoahThere";
        }
        }, 50));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Wtf";
        }
        }, 100));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "VeryCrazyTextIndeed";
        }
        }, 150));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "MoreTextWoah";
        }
        }, 200));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "The input codes are up there.";
        }
        }, 250));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Mama more text!";
        }
        }, 300));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Crazy this is text!";
        }
        }, 350));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "The hidden allows those.";
        }
        }, 400));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Seek more text!";
        }
        }, 450));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Really? More Text!?";
        }
        }, 500));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Let's see how much text";
        }
        }, 550));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Do you ever feel like... text?";
        }
        }, 600));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "the hidden needs them.";
        }
        }, 650));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryTex.textContent = "Forever";
        }
        }, 700));
        timeoutsText.push(setTimeout(function() {
            if (veryTexts == "yes") {
            veryText();
        }
        }, 750));
    }, 1));
}

// * table header rainbow effect.
var r = 255,
g = 0,
b = 0;

const lol = document.getElementById("lol");
const rep = document.getElementById("rep");
var rgbYes = "yes";

function background() {
    if (rgbYes == "yes") {
	    if (r == 255 && g <= 255 && b == 0) {
	    	g ++;
	    }

	    if (r != 0 && g == 255 && b == 0) {
            r --;
	    }

	    if (r == 0 && g == 255 && b <= 255) {
	    	b ++;
	    }

	    if (r == 0 && g != 0 && b == 255) {
	    	g --;
	    }

	    if (r <= 255 && g == 0 && b == 255) {
	    	r ++;
	    }
        if (r == 255 && g == 0 && b != 0) {
            b --;
        }

	    setTimeout(function() {
		    background();
	    }, 10);

	    lol.style.background = 'rgb('+r+','+g+','+b+')';
	    rep.style.background = 'rgb('+r+','+g+','+b+')';
    }
}

background();

// * Image replaces text.
function imageMon() {
    var repl = document.getElementById("repL");
    var monW = document.createElement("img");
    monW.setAttribute("src", "rocky-mountainside.jpg");
    monW.setAttribute("alt", "MountainWay");
    monW.setAttribute("width", "615");
    monW.setAttribute("height", "410");
    repl.replaceChild(monW, repl.firstChild);
}

// * Playing around with text decorations.
function underception() {
    var under = document.getElementById("under");
    under.style.textDecoration = "overline";
    setTimeout(function() {
        under.style.textDecoration = "line-through";
    }, 100)
    setTimeout(function() {
        under.style.textDecoration = "blink";
    }, 200)
    setTimeout(function() {
        under.style.textDecoration = "dashed underline";
    }, 300)
    setTimeout(function() {
        under.style.textDecoration = "dotted underline overline";
    }, 400)
    setTimeout(function() {
        under.style.textDecoration = "wavy line-through";
    }, 500)
    setTimeout(function() {
        under.style.textDecoration = "wavy overline";
    }, 600)
    setTimeout(function() {
        under.style.textDecoration = "dotted underline";
    }, 700)
    setTimeout(function() {
        under.style.textDecoration = "wavy underline";
    }, 800)
    setTimeout(function() {
        under.style.textDecoration = "line-through overline underline";
    }, 900)
    setTimeout(function() {
        under.style.textDecoration = "underline";
    }, 1000)
    setTimeout(function() {
        underception();
    }, 1100)
}

// * function to increase top padding for the water element.
var dropper = document.getElementById("dropper");
var dropperPad = dropper.style.paddingTop;
var incR = 10;
var dropperNum;
var dropperStr;
function dropIt() {
    dropperPad = dropper.style.paddingTop;
    incR++;
    dropper.style.paddingTop = incR + "px";
    dropperStr = dropperPad.replace(/[^0-9]/g, "");
    dropperNum = parseInt(dropperStr, 10);
    if (dropperNum > 20000) {
            incR = dropper.style.paddingTop;
            stopWater();
    } else {
            setTimeout(function() {
            dropIt();
        }, 100)
    }
}

var stopIt;
function stopWater() {
    var timeoutThing = setTimeout(function() {
    if (stopIt != "yes") {
    stopIt = "yes"
    document.body.innerHTML = '';
    audio.pause();
    var errorNoise = new Audio("../audio/Do not.wav");
    errorNoise.play();
    errorNoise.volume = 0.5;
    uhOh.pause();
    airAudio.pause();
    setTimeout(function() {
        var newOne = document.createElement("h1");
        newOne.textContent = "Wtf, how the hell did you manage to get the water element to overflow over 20000px of padding???";
        document.body.appendChild(newOne);
        var newRestart = document.createElement("button");
        newRestart.textContent = "Refresh...?";
        newRestart.setAttribute("id", "backOut");
        document.body.appendChild(newRestart);
        var backOut = document.getElementById("backOut");
        backOut.addEventListener('click', function() {
            window.location.reload();
        })
        }, 1000);
    } else {
        clearTimeout(timeoutThing);
    }
    }, 100);
    }

// * Little error thing
var hellIsON = "no";
var pressedT = 0;
function hell() {
    pressedT++;
    if (pressedT >= 10) {
        hellIsON = "yes";
        helloo.textContent = "?";
        var grt = new Audio("Bad.wav")
        grt.play();
        grt.volume = 0.5; 
    } else {
        var grt = new Audio("Bad.wav")
        grt.play();
        grt.volume = 0.5;
    }
}

// * chaos ensues.
var uhOh = new Audio("ErrorSound.wav");
var airAudio = new Audio("low.wav");
var helloo = document.getElementById("helloo");
var hiddenOne = document.getElementById("hiddenOne");
var loltab = document.getElementById("loltab");
var reptab = document.getElementById("reptab");
function addingMix() {
    if (hellIsON == "yes") {
        audio.pause();
        hiddenOne.removeAttribute("hidden");
        uhOh.play();
        uhOh.volume = 0.7;
        airAudio.play();
        airAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        rgbYes = "no";
        rgbNo();
        loltab.style.backgroundColor = "gray";
        reptab.style.backgroundColor = "gray";
        document.body.style.backgroundColor = "lightgray";
        helloo.disabled = true;
    } else {
        helloo.textContent = "Hello :3";
        console.log("Hello :3");
        helloo.disabled = true;
        setTimeout(function() {
            helloo.textContent = "Crit";
            helloo.disabled = false;
        }, 2000)
    }
}

// * quick little function to change color for more chaos.
function rgbNo() {
    lol.style.background = 'rgb(255,1,1)';
    rep.style.background = 'rgb(255,1,1)';
    setTimeout(function() {
        rgbNo();
    }, 10);
}