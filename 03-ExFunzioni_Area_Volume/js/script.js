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

function checkValid(valore){
    let nonValido = isNaN(valore) || valore === ""
    return nonValido;
}


areaButton.addEventListener("click", function(){
    catchUserData();
    
    if(checkValid(base) && checkValid(altezza)){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    }else if(checkValid(base)){
        risultati.innerHTML = "Inserisci un valore valido per la base";
    }else if(checkValid(altezza)){
        risultati.innerHTML = "Inserisci un valore valido per l'altezza";
    } else {
        risultati.innerHTML = `L'area è ${calcolaArea(base, altezza)}` 
    }
})


volumeButton.addEventListener("click", function(){
    catchUserData();

    if((checkValid(base)) && checkValid(altezza) && checkValid(profondita)){
        risultati.innerHTML = "Per favore inserisci delle misure valide";
    }else if((checkValid(base)) && checkValid(altezza)){
        risultati.innerHTML = "Inserisci un valore valido per la base e uno per l'altezza";
    }else if((checkValid(base)) && checkValid(profondita)){
        risultati.innerHTML = "Inserisci un valore valido per la base e uno per la profondità";
    }else if(checkValid(altezza) && checkValid(profondita)){
        risultati.innerHTML = "Inserisci un valore valido per l'altezza e uno per la profondità";
    }else if(checkValid(base)){
        risultati.innerHTML = "Inserisci un valore valido per la base";
    }else if(checkValid(altezza)){
        risultati.innerHTML = "Inserisci un valore valido per l'altezza";
    }else if(checkValid(profondita)){
        risultati.innerHTML = "Inserisci un valore valido per la profondità";
    } else {
        risultati.innerHTML = `Il volume è ${calcolaVolume(calcolaArea(base,altezza),profondita)}`;
    }
})

