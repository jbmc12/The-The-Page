let enableInput = false,
    formatG = false,
    greatYield = false,
    sun = false,
    theTerm = false;

function nexusDoor() {
    if (enableInput == true && formatG == true && greatYield == true && sun == true && theTerm == true) {
        here.play();
        eerie = false;
        audio.pause();
        setTimeout(() => {
            document.body.setAttribute("hidden", true);
        }, 4200);
        setTimeout(() => {
            window.open("nexus.html", "_self");
        }, 12210);
    }
}