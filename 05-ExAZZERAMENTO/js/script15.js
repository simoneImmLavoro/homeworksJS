let myArray = [ 34, 5, 67, 2, 13, 34];

function clearDoubles(arr){
    newArray = [];

    for(let i = 0; i < myArray.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i])
        }
    }

    console.log(newArray);
}

clearDoubles(myArray)

