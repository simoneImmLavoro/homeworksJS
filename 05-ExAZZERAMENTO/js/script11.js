let myString = "E' nato prima l'uovo o la gallina ?"

function longWordFinder(string){
    let myArr = string.split(" ");
    let longerWord = "";

    for(let i = 0; i < myArr.length; i++){
        if(myArr[i].length > longerWord.length){
            longerWord = myArr[i];
        }
    }

    return longerWord;
}

console.log(longWordFinder(myString))