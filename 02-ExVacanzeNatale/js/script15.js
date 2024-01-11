let numberArr = [
    21,
    34,
    6,
    78,
    90,
    12,
    24,
    65,
    76,
    35,
    48,
    52,
    16,
    7
];

let randomPosition = Math.ceil(Math.random() * numberArr.length-1);

console.log("Stampo il numero alla posizione: " + randomPosition)

console.log(numberArr[randomPosition]);