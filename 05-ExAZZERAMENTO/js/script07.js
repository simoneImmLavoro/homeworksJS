let myRows = 4;
let myKey = 1;
let myString= "";

for(let i = 1; i <= myRows; i++){
    for(let g = 1; g <= i; g++){
        myString = myString + myKey;
        myKey++;
    }
    myString = myString + "\n"
}

console.log(myString)



