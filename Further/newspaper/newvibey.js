var newButton2 = document.createElement("button")
function vibeyActive() {
    audio.pause();
    vibeyaudio.play();
    vibeyaudio.volume = 0.7;
    vibeyaudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    document.body.style.background = "rgb(255,0,0)";
    newButton2.setAttribute("id", "megaVibey");
    newButton2.textContent = "HOLY [[cungadero]]";
    newButton2.setAttribute("onclick", "megaVibe()")
    document.body.appendChild(newButton2);
    backgroundWoah();
    spanWoah();
}

var r = 255,
    g = 0,
    b = 0;

var sr = 0,
    sg = 255,
    sb = 254;

function backgroundWoah() {
      
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
		backgroundWoah();
	}, 5);

    document.body.style.background = 'rgb('+r+','+g+','+b+')';
    document.getElementById("megaVibey").style.background = 'rgb('+r+','+g+','+b+')';
}

function spanWoah() {
      
	if (sr == 255 && sg <= 255 && sb == 0) {
		sg ++;
	}

	if (sr != 0 && sg == 255 && sb == 0) {
        sr --;
	}

	if (sr == 0 && sg == 255 && sb <= 255) {
		sb ++;
	}

	if (sr == 0 && sg != 0 && sb == 255) {
		sg --;
	}

	if (sr <= 255 && sg == 0 && sb == 255) {
		sr ++;
	}
    if (sr == 255 && sg == 0 && sb != 0) {
        sb --;
    }

	setTimeout(function() {
		spanWoah();
	}, 5);

    document.body.style.color = 'rgb('+sr+','+sg+','+sb+')';
}