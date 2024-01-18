// Es.7
// Scrivi un programma che stampa il seguente pattern :
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let myMax = 10;

for(let i = 1; i <= 5; i++){
    let myKey = 1;
    let myString = 0;
    for(let g = 1; g <= i; g++){
        myString += myKey;
    }
    console.log(myString);
}





