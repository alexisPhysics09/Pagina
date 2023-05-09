function dijoSi() {

    var imagen = document.createElement("img");
    imagen.src = './images/8530f3c1-ac0a-4fae-9886-06db2bc0d5be.jpg';

    imagen.style.width = "312px";

    var container = document.createElement("div");
    container.appendChild(imagen);

    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.background = "rgba(0, 0, 0, 0.5)";
    container.style.zIndex = "9999";
    container.style.padding = "20px";
    container.style.size

    document.body.appendChild(container);

    container.onclick = function () {
        document.body.removeChild(container);
    }
}

function moverNo() {
    var btnNo = document.getElementById("btn-no");
    var nuevaPosX = Math.floor(Math.random() * (window.innerWidth - btnNo.offsetWidth));
    var nuevaPosY = Math.floor(Math.random() * (window.innerHeight - btnNo.offsetHeight));

    btnNo.style.left = nuevaPosX + "px";
    btnNo.style.top = nuevaPosY + "px";
}