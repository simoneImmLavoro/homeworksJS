let stringsArr = [
    "Ah",
    "queste",
    "stringhe",
    "sono delle",
    "cose strane",
    "sono",
    "frasi",
    "ma anche degli",
    "array"
]

let myString = stringsArr.join(" ");
console.log(myString)

let myString2 = [];

for(let i=0; i < stringsArr.length; i++){
    myString2.push(stringsArr[i]);
}

console.log(myString2.join(" "));