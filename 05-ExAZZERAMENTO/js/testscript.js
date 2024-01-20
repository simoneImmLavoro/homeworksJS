let myString = "Verde, rosso, blu i colori Power Rangers";
let myChar = ",";


function findLetter(sentence, letter){
    let myArr = sentence.split("");
    let counter = 0;

    myArr.forEach(char => {
        if( char.toUpperCase() === letter.toUpperCase()){
            counter++
        }
    })

    return counter;
}

console.log(findLetter(myString, myChar))


