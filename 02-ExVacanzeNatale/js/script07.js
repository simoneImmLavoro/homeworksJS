// let num1 = Math.ceil(Math.random()*101);
// let num2 = Math.ceil(Math.random()*101);

let num1 = 34;
let num2 = -3;

console.log(`Il primo numero è ${num1}, il secondo numero è ${num2}`)

if(num1 == num2){
    console.log("I due numeri sono uguali")
} else {
    if((100 - num1) < (100 - num2)){
        console.log("Il primo numero è più vicino a 100");
    }
    
    if((100 - num1) > (100 - num2)){
        console.log("Il secondo numero è più vicino a 100");
    } 
}


