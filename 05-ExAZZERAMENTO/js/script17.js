let array1 = [27, 16, 23, 24, 12, 27];
let array2 = [45, 6, 27, 12, 46, 11, 13];



function clearDoubles(arr){
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i])
        }
    }

    return newArray
}

function mergeAndClean(firstArr, secondArr){
    let first = clearDoubles(firstArr);
    let second = clearDoubles(secondArr);

    let finalArr = [];

    for(let i = 0; i < first.length; i++){
        if(!finalArr.includes(first[i])){
            finalArr.push(first[i])
        }
    }
    
    for(let i = 0; i < second.length; i++){
        if(!finalArr.includes(second[i])){
            finalArr.push(second[i])
        }
    }

    console.log(finalArr)

    return finalArr;
}


mergeAndClean(array1, array2)