let array1 = [1,0,2,4,6];
let array2 = [0,4,5,8,7];

let finalArr = [];

for(let i = 0; i < array1.length; i++){
    let sum = array1[i] + array2[i];
    finalArr.push(sum);
}

console.log(finalArr)