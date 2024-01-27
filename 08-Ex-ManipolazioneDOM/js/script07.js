let myRInput = document.querySelector("#raggio");
let volumeBtn = document.querySelector("#volumeBtn");
let resultField = document.querySelector("#result");

function calcVol(raggio){
    let volume = (4/3) * Math.PI * Math.pow(raggio, 3);
    return volume;
}


volumeBtn.addEventListener("click", function(){
    let myR = Number(myRInput.value);
    let myVol = calcVol(myR);

    resultField.innerHTML = "Il Volume della sfera con raggio " + myR + " è: " + myVol;
    myRInput.value=""
})