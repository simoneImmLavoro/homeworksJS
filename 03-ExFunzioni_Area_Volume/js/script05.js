let misuraBaseInput = document.getElementById("misuraBaseInput");
let misuraAltezzaInput = document.getElementById("misuraAltezzaInput");
let misuraProfonditaInput = document.getElementById("misuraProfonditaInput");
let areaButton = document.getElementById("areaButton");
let volumeButton = document.getElementById("volumeButton");
let risultati = document.getElementById("risultati");

let base;
let altezza;
let profondita;

function catchUserData(){
    base = parseFloat(misuraBaseInput.value);
    altezza = parseFloat(misuraAltezzaInput.value);
    profondita = parseFloat(misuraProfonditaInput.value);
}

function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

function calcolaVolume(area, profondità){
    let volume = area * profondità;
    return volume;
}

areaButton.addEventListener("click", function(){
    catchUserData();
    
    if(isNaN(base) || base === "" || isNaN(altezza) || altezza === "" ){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    } else {
        risultati.innerHTML = `L'area è ${calcolaArea(base, altezza)}` 
    }
})

volumeButton.addEventListener("click", function(){
    catchUserData();

    if(isNaN(base) || base === "" || isNaN(altezza) || altezza === "" || isNaN(profondita) || profondita === ""){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    } else {
        risultati.innerHTML = `Il volume è ${calcolaVolume(calcolaArea(base,altezza),profondita)}`;
    }
})

