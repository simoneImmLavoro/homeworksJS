for(let i = 1; i <= 100; i++){
    if( (i % 3) == 0 && (i % 5) == 0){
        console.log(i + " Ciao, Mondo");
    } else if ((i % 3) == 0){
        console.log(i + " Ciao");
    } else if((i % 5) == 0){
        console.log(i + " Mondo");
    } else {
        console.log(i);
    }
}