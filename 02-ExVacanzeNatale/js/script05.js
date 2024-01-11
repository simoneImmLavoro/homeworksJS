let nomeFile = "questoeuntest.pdf";
let nomeFileArr = nomeFile.split(".");

let extension;

if(nomeFileArr.length>1){
    extension = "L'estensione del tuo file è ." + nomeFileArr[nomeFileArr.length-1];
} else {
    extension = "Il tuo nome file non contiene un'estensione."
}

console.log(extension)


// let nomeFile = "questoeuntest.pdf";
// let nomeFileArr = nomeFile.split("");

// let extensionArr = [];
// let foundDot = false;

// for (let i = nomeFileArr.length - 1; i >= 0; i--) {
//     if (nomeFileArr[i] === ".") {
//         foundDot = true;
//         break; // Esci dal ciclo se trovi il punto
//     }
//     extensionArr.unshift(nomeFileArr[i]); // Aggiungi il carattere all'inizio dell'array
// }

// if (foundDot) {
//     let extension = "." + extensionArr.join("");
//     console.log(extension);
// } else {
//     console.log("Il nome del file non contiene un'estensione.");
// }
