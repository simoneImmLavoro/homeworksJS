// let array = ["Banana", "Orange", "Apple", "Mango", "Ananas", "Blueberry", "Tangerine"];

// // array.sort()
// // array.reverse()

// let sortedArr = array.toSorted()
// let reversedArr = array.toReversed()


// console.log(array);
// console.log(sortedArr);
// console.log(reversedArr);

// console.log("---------------------------------");
// console.log("---------------------------------");

// let numArr = [34, 67, 4, 12, 61, 9, 24, 0];

// // numArr.sort() non funziona perchè rende un sorting da stringhe anzichè number
// //si usa una compare function
// numArr.sort(function(a, b){return a - b});

// console.log(numArr);

// The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a - b}
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

let numArr2 = [34, 67, 4, 12, 61, 9, 24, 0];

numArr2.sort(function(a, b){return a - b});

console.log(numArr2);

let numArr3 = [34, 67, 4, 12, 61, 9, 24, 0];

numArr3.sort(function(a, b){return b - a});

console.log(numArr3);

let array = ["Banana", "Orange", "Apple", "Mango", "Ananas", "Blueberry", "Tangerine"];

array.sort()

console.log(array);

let myContacts = [
    {
        nome: "Franco",
        cognome: "Sigismondi"
    },
    {
        nome: "Sandra",
        cognome: "Zoldrick"
    },
    {
        nome: "Lara",
        cognome: "Gini"
    }
]

myContacts.sort(function(a, b){
    if(a.cognome < b.cognome){
        return -1
    } else if(a.cognome > b.cognome){
        return 1
    } else {
        return 0
    }
})

let numeriComplessi = [7, 2, 5, 12, 9, 8, 3, 6];

numeriComplessi.sort(function(a, b) {
    if( a % 2 === 0 && b % 2 !== 0){
        return -1;
    } else if(a % 2 !== 0 && b % 2 === 0){
        return 1
    } else {
        return a- b
    }

})

console.log(numeriComplessi);

let libri = [
    { nome: 'LibroA', anno: 2018 },
    { nome: 'LibroB', anno: 2016 },
    { nome: 'LibroC', anno: 2018 },
    { nome: 'LibroD', anno: 2015 },
    { nome: 'LibroE', anno: 2016 },
];

libri.sort(function(a,b){
    if(a.anno < b.anno){
        return 1
    } else if(a.anno > b.anno){
        return -1
    } else {
        if(a.nome < b.nome){
            return -1
        } else if(a.nome > b.nome){
            return 1
        } else {
            return 0
        }
    }
})

console.log(libri);

let numeriVari = [15, 9, 7, 10, 6, 30, 12, 4];

numeriVari.sort(function(a,b){
    if(a % 3 == 0 && b % 3 == 0){
        return a - b
    } else if(a % 5 == 0 && b % 5 == 0){
        return a - b
    } else {
        if(a % 5 == 0 && b % 3 == 0){
            return 1
        } else if(a % 3 == 0 && b % 5 == 0){
            return -1
        } else {
            return 0
        }
    }
})

console.log(numeriVari);

let oggettiComplessi = [
    { categoria: 'B', valore: 15 },
    { categoria: 'A', valore: 20 },
    { categoria: 'Speciale', valore: 18 },
    { categoria: 'C', valore: 25 },
    { categoria: 'Speciale', valore: 22 },
    { categoria: 'A', valore: 16 },
];

oggettiComplessi.sort(function(a,b){
    if(a.categoria == 'Speciale' && b.categoria != 'Speciale'){
        return -1
    } else if(a.categoria != 'Speciale' && b.categoria == 'Speciale'){
        return 1;
    } else {
        if(a.categoria < b.categoria){
            return -1 
        } else if( a.categoria > b.categoria){
            return 1
        }else {
            if(a.valore < b.valore){
                return -1;
            } else if(a.valore > b.valore){
                return 1
            } else{
                return 0;
            }
        }
    }

    
})

console.log(oggettiComplessi);