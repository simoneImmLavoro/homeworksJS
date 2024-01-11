let mySentence = "oggi sono iniziate le vacanze natalizie";
let mySentenceArr = mySentence.split(" ");

console.log(mySentenceArr)

let myCapArr = [];

for(let i = 0; i < mySentenceArr.length; i++){
    let newWord = mySentenceArr[i].charAt(0).toUpperCase() + mySentenceArr[i].slice(1);
    myCapArr.push(newWord);
}

console.log(myCapArr.join(" "));