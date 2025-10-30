function megaVibe() {
    vibeyaudio.pause();
    vibeyMEGAaudio.play();
    vibeyMEGAaudio.volume = 0.7;
    vibeyMEGAaudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    var newButton3 = document.createElement("button");
    const spanFor = document.getElementsByClassName("textSpan");
    for (let i = 0; i < spanFor.length; ++i) {
        console.log("Oh fuck")
        newButton3.setAttribute("class", "scoreThing");
        newButton3.setAttribute("onclick", "scoreThing()");
        newButton3.textContent = "[[REDACTED]]";
        spanFor[i].appendChild(newButton3);
    }
}