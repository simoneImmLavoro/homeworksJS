let misuraBaseInput = document.getElementById("misuraBaseInput");
let misuraAltezzaInput = document.getElementById("misuraAltezzaInput");
let misuraProfonditaInput = document.getElementById("misuraProfonditaInput");
let areaButton = document.getElementById("areaButton");
let volumeButton = document.getElementById("volumeButton");
let risultati = document.getElementById("risultati");

// let base = misuraBaseInput.value;
// let altezza = misuraAltezzaInput.value;
// let profondità = misuraProfonditaInput.value;


function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

function calcolaVolume(base, altezza, profondità){
    let area = calcolaArea(base, altezza);
    let volume = area * profondità;

    return volume;
}

areaButton.addEventListener("click", function(){
    let base = parseFloat(misuraBaseInput.value);
    let altezza = parseFloat(misuraAltezzaInput.value);

    if(isNaN(base) || base === "" || isNaN(altezza) || altezza === "" ){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    } else {
        risultati.innerHTML = `L'area è ${calcolaArea(base, altezza)}` 
    }
})

volumeButton.addEventListener("click", function(){
    let base = parseFloat(misuraBaseInput.value);
    let altezza = parseFloat(misuraAltezzaInput.value);
    let profondita = parseFloat(misuraProfonditaInput.value);



    if(isNaN(base) || base === "" || isNaN(altezza) || altezza === "" || isNaN(profondita) || profondita === ""){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    } else {
        let volume = calcolaArea(base, altezza) * profondita;
        risultati.innerHTML = `Il volume è ${volume}`;
    }
})

