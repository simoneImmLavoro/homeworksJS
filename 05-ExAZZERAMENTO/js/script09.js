let myString = "Verde, rosso, blu i colori Power Rangers";
let myChar = "n";


function findLetter(sentence, letter){
    let myArr = sentence.split("");
    let counter = 0;

    myArr.forEach(char=>{
        if(char === letter){
            counter++
        }
    })

    return counter;
}

console.log(findLetter(myString, myChar))