let myArray = [];
let maxNum = 0;


for(let i = 0; i <= 5; i++){
    let random = Math.ceil(Math.random() * 100);

    if(myArray.includes(random)){
        i--
    } else {
        myArray.push(random)

    }
}

console.log(myArray);

myArray.forEach(number =>{
    if(number > maxNum){
        maxNum = number;
    }
})

console.log(maxNum);