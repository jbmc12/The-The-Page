function sun() {
    window.open("beauty/beauty.html", "_self");
}

function hint() {
    setTimeout(() => {
        
        var hinty = document.getElementById("hint");
        red = 255;
        off = 0;
        
            hinty.style.color = 'rgb(' + red + ',0,0)';
            hinty.style.backgroundColor = 'rgb(' + red + ',0,0)';
        setTimeout(() => {
            hinty.style.color = 'rgb(' + off + ',0,0)';
            hinty.style.backgroundColor = 'rgb(' + off + ',0,0)';
            hint();
        }, 125);

    }, 20000);
}
hint();