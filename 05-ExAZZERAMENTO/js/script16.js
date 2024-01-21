let array1 = [1,0,2,4,6,8];
let array2 = [0,4,5,8,7];

let finalArr = [];

for(let i = 0; i < Math.max(array1.length, array2.length); i++){
    
    let value1 = array1[i] || 0;
    let value2 = array2[i] || 0;


    let sum = value1 + value2;
    finalArr.push(sum);
}

console.log(finalArr)