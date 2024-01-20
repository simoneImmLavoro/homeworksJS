let myArr = [4, 2, 6]
let myKey = "*";

myArr.forEach(num =>{
    let myString = "";
    for(let i = 1; i <= num; i++){
        myString += myKey;
    }
    console.log(myString);
})