// * read.
let newButton = document.createElement("button");
let newScript = document.createElement("script");
function checkful() {
    let choice = document.getElementById("rrt").value;
    switch(choice) {
        case(choice = "nexus"):
            newButton.setAttribute("id", "hello");
            newButton.setAttribute("onclick", "button2Speaks()");
            newButton.textContent = "Hello";
            document.getElementById("crash").appendChild(newButton);
            newScript.setAttribute("src", "Script/btn.js");
            document.getElementById("scripts").appendChild(newScript);
        break;
        case(choice = "enable"):
            if (formatG == true && greatYield == true && sun == true && theTerm == true) {
                enableInput = true;
                setTimeout(() => {
                    nexusDoor();
                }, 10);
            } else {
                console.error("Access Denied.")
                reject.play();
            }
        break;
        case(choice = "hint"):
            var itExist = document.getElementById("hello");
            if (itExist != undefined) {
                document.getElementById("en").textContent = "1, 4, 11, 13, then -> enable";
                btn.play();
            } else {
                console.error("Element id 'hello' does not exist or is unavailable.");
                reject.play();
            }
        break;
            default:
                console.error("Value not registered. Rejected.");
                reject.play();
    }
}
