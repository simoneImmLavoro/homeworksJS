let myArr = [4, 2, 6]

myArr.forEach(num =>{
    let myKey = "*";
    let myString = "";
    for(let i = 1; i <= num; i++){
        myString += myKey;
    }
    console.log(myString);
})