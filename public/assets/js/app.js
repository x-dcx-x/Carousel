document.addEventListener("DOMContentLoaded", function () {
    let nbr = 10;
    let p = 0;
    let content = document.getElementById("content");

    // Ajustez la largeur de #content
    content.style.width = (800 * nbr) + "px";
    let div;
    for (let i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/im" + i + ".jpg')";
        content.appendChild(div);
        setTimeout(afficherMasquer, 500);
    }

    let butG = document.getElementById("buttonLeft");
    let butD = document.getElementById("buttonRight");
// balbal
    butD.onclick = function () {
        if (p > -nbr + 1)
            p--;
        content.style.transform = "translate(" + p * 800 + "px)";
        content.style.transition = "all 0.5s ease";
        setTimeout(afficherMasquer, 500);  // Attendre 500 ms (0.5s) avant d'appeler afficherMasquer
    };

    butG.onclick = function () {
        if (p < 0)
            p++;
        content.style.transform = "translate(" + p * 800 + "px)";
        content.style.transition = "all 0.5s ease";
        setTimeout(afficherMasquer, 500);  // Attendre 500 ms (0.5s) avant d'appeler afficherMasquer
    };
});

function afficherMasquer(){
    let butG = document.getElementById("buttonLeft");
    let butD = document.getElementById("buttonRight");

    if(p===-nbr+1)
        butD.style.visibility="hidden";
    else
        butD.style.visibility="visible";

    if (p === 0)
        butG.style.visibility="hidden";
    else
        butG.style.visibility="visible";
}

