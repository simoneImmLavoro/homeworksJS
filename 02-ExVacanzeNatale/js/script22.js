let myString = "Fatti non foste per viver come brutti, ma per seguir virtute e conoscenza";
let charPosiz = 35;

console.log(myString);

let newString = myString.slice(0, charPosiz) + myString.slice(charPosiz+1);
console.log(newString);