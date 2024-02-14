let array = ["Banana", "Orange", "Apple", "Mango", "Ananas", "Blueberry", "Tangerine"];

// array.sort()
// array.reverse()

let sortedArr = array.toSorted()
let reversedArr = array.toReversed()


console.log(array);
console.log(sortedArr);
console.log(reversedArr);

console.log("---------------------------------");
console.log("---------------------------------");

let numArr = [34, 67, 4, 12, 61, 9, 24, 0];

// numArr.sort() non funziona perchè rende un sorting da stringhe anzichè number
//si usa una compare function
numArr.sort(function(a, b){return a - b});

console.log(numArr);