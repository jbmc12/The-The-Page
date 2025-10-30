var g = 40;
const navthing = document.getElementById("navthing");

function navcolor() {

    if (g == 40) {
        g = 80;
    } else {
        g = 40;
    }

	setTimeout(function() {
		navcolor();
	}, 5000);

	navthing.style.background = 'rgb('+g+','+g+','+g+')';
}

navcolor();

const woclick = document.getElementById("woclick");
var enabled = true;
function woappear() {
    woclick.style.display = "block";
    if (enabled === true) {
        enabled = false;
        setTimeout(() => {
            woclick.style.display = "none"
            enabled = true;
        }, 2000);
    }
}