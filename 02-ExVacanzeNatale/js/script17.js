let myClock = document.querySelector("#currentTime");
let myDay = document.querySelector("#currentData");
let myWave = document.querySelector("#timeWave");


function selfUpdatingDateTime(){
    const completeDateTime = new Date()
    const giorno = completeDateTime.getDate();
    const mese = completeDateTime.getMonth() + 1;
    const anno = completeDateTime.getFullYear();
    const ore = completeDateTime.getHours().toString().padStart(2, '0');
    const minuti = completeDateTime.getMinutes().toString().padStart(2, '0');
    const secondi = completeDateTime.getSeconds().toString().padStart(2, '0');
    
    let formatData = `${giorno}/${mese}/${anno}`
    let formatTime = `${ore}:${minuti}:${secondi}`
    
    myDay.innerHTML = formatData
    myClock.innerHTML = formatTime

    
    if(ore >= "00" && ore < "02"){
        myWave.innerHTML = "Buona notte";
    } else if(ore >= "02" && ore < "12"){
        myWave.innerHTML = "Buon giorno";
    } else if(ore >= "12" && ore < "21"){
        myWave.innerHTML = "Buona sera";
    } else if(ore >= "21" && ore < "24"){
        myWave.innerHTML = "Buona notte";
    }
}

setInterval(selfUpdatingDateTime, 1000);

selfUpdatingDateTime();
