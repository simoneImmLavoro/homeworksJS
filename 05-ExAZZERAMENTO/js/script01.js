let array = [];
let maxNum;


for(let i = 0; i <= 5; i++){
    let random = Math.ceil(Math.random() * 100);

    if(array.includes(random)){
        i--
    } else {
        array.push(random)

    }
}

console.log(array);

for(let i=0; i < array.length; i++){
    if(array[i] > array[i-1]){
        maxNum= array[i]
    }
}

console.log(maxNum);