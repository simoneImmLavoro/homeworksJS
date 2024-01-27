let element = document.querySelector("#change");
let isInitialState = true;

function changeElement() {
    if (isInitialState) {
        element.style.borderRadius = "0";
        element.style.backgroundColor = "rgb(93, 170, 180)";
        element.style.transform = "translate(-50%, -50%) rotate(-180deg) scale(1.3";
    } else {
        element.style.borderRadius = "";
        element.style.backgroundColor = "";
        element.style.transform = "";
        element.style.transformOrigin = "";
    }

    // Inverti lo stato per il prossimo intervallo
    isInitialState = !isInitialState;
}

setInterval(changeElement, 2000);