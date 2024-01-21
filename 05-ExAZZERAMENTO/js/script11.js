let myString = "E' nato prima l'uovo o la gallina ?"

function longerWord(sentence){
    let sentenceArr = sentence.split(" ");
    let longer = " ";

    sentenceArr.forEach(word =>{
        if(word.length > longer.length){
            longer = word;
        }

    })
    return longer;
}

console.log(longerWord(myString))