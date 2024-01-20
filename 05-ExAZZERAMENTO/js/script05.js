let myTot = 0;

for(let i = 0; i < 1000; i++){
    if( (i % 5 == 0) || (i % 3 == 0)){
        myTot += i;
    }
}

console.log(myTot)