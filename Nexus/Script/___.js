function clearInp() {
    document.getElementById("rrt").value = "";
}
clearInp();
// * Opacity Back up and styles back
const styles = document.getElementById("Styles");
const bodyO = document.getElementById("root");
let bodyOO = bodyO.style.opacity;
let body_O = bodyOO.replace(/[^0-9]/g, "");
let ONum = parseInt(body_O, 10);
let root = document.getElementById("rrt");
function inputBright(){
    if (ONum < 100 && readyUp == true) {
        ONum++;
        bodyO.style.opacity = ONum + "%";
        setTimeout(() => {
            inputBright();
        }, 20);
    } else if (ONum < 100) {
        setTimeout(() => {
            inputBright();
        }, 20);
    }
}
inputBright();

let vary = false;
let eerie = false;
root.addEventListener('click', function(event) {
    if (vary == false) {
        btn.play();
        styles.disabled = false;
        vary = true;
        eerie = true;
    }
}, false);
root.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        checkful();
    }
}, false);

function eeriePlay() {
    setTimeout(() => {
        if (eerie == true) {
            corrupt.play();
            eeriePlay();
        } else {
            eeriePlay();
        }
    }, 15000);
}
eeriePlay();

function machineryPlay() {
    setTimeout(() => {
        if (eerie == true) {
            erro.play();
            machineryPlay();
        } else {
            machineryPlay();
        }
    }, 24300);
}
machineryPlay();