let button2 = document.getElementById("hello");
let clicked = 0;

function notSoSpam() {
    btn.play();
    button2.style.cursor = "not-allowed";
    button2.disabled = true;
    let timerBackup = setTimeout(() => {
        button2.style.cursor = "pointer";
        button2.disabled = false;
    }, 5000);
}

function button2Speaks() {
    clicked++;
    notSoSpam()
    switch(clicked) {
        case(clicked = 1):
            button2.textContent = "What brings you here?";
            document.getElementById("en").textContent = "enable & hint";
        break;
        case(clicked = 2):
            button2.textContent = "Hrmmrmrm..."
            setTimeout(() => {
                button2.textContent = "So peculiar."
                document.getElementById("en").textContent = "null";
                greatYield = true;
            }, 2000);
        break;
        case(clicked = 3):
            button2.innerHTML = "I guess you know about the " + "<span id='red'>hidden</span>" + " one.";
            theTerm = false;
        break;
        case(clicked = 4):
            button2.textContent = "That little button... in its secretive space... the code could only tell so much about its existence. Even if you datamined this, it won't tell you what it exactly is supposed to mean."
        break;
        case(clicked = 5):
            button2.textContent = "As for me, I am only allowed to say what the code tells me to say... maybe you could manipulate the value somehow."
            sun = true;
        break;
        case(clicked = 6):
            button2.textContent = "You could just find the value to change it, in case you want to skip something... in the console... maybe that value is the amount of times you clicked this, although you want the name of the variable";
            sun = false;
        break;
        case(clicked = 7):
            button2.textContent = "That value is... a table... maybe around the high. Kind of interactive.";
            greatYield = false;
            formatG = false;
        break;
        case(clicked = 8):
            button2.textContent = "..."
            setTimeout(() => {
                button2.textContent = "Maybe if it is a bit tasking...";
                setTimeout(() => {
                    button2.textContent = "Ah!"
                    setTimeout(() => {
                        button2.textContent = "Excus-"
                        err.play();
                    }, 10);
                    setTimeout(() => {
                        button2.textContent = "-"
                        err.play()
                    }, 20);
                    setTimeout(() => {
                        button2.textContent = "I am so-"
                    }, 40);
                    setTimeout(() => {
                        button2.textContent = "Need the-"
                        no.play();
                    }, 80);
                    setTimeout(() => {
                        button2.textContent = "Error"
                    }, 160);
                    setTimeout(() => {
                        button2.textContent = "Err-"
                        ind.play()
                    }, 320);
                    setTimeout(() => {
                        button2.textContent = "Sorry about that."
                    }, 500);
                }, 500);
            }, 1500);
        break;
        case(clicked = 9):
            button2.innerHTML = "This page is usually not meant to be found, you normally just want to be at the " + "<span id='x1'>Nexus</span>" + " right away";
            colorNex = true;
            thatOne()
        break;
        case(clicked = 10):
            colorNex = false;
            button2.textContent = "To be fair, this isn't exactly the most pleasing page to be in. Very... eerie, empty... lonely.";
        break;
        case(clicked = 11):
            button2.textContent = "In any case, if you aren't too sure about what to do here, I guess... you could just look around... maybe.";
        break;
        case(clicked = 12):
            button2.textContent = "Otherwise, I don't really know what else to say. It's all just a wonder.";
            theTerm = true;
        break;
        case(clicked = 13):
            button2.textContent = "Ah, this is my last line for the time being, I will rollback to the first line in the next click.";
        break;
        case(clicked = 14):
            clicked = 0;
            button2.textContent = "Hello";
            formatG = true;
        break;

    }
}

let colorNex = false;
let r = 255,
    b = 0,
    g = 0;

function thatOne() {
    if (colorNex == true) {
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
		    thatOne();
	    }, 10);

	    document.getElementById("x1").style.color = 'rgb('+r+','+g+','+b+')';
    }
}

function repeat() {
    setTimeout(() => {
        document.getElementById("en").style.color = "white";
        setTimeout(() => {
            document.getElementById("en").style.color = "black";
            repeat();
        }, 50);
    }, 10000);
}
repeat();