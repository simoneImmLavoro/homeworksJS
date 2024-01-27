let totalOfRows = document.querySelectorAll("tr").length;
let myTab = document.querySelector("#Tabella");

let totalOfCellsOfRow = document.querySelectorAll("tr td");

function creaRiga(numCell){
    totalOfRows++;
    let newRow = document.createElement("tr");
    
    for(let i=1; i <= numCell; i++ ){
        let newCell = document.createElement("td");
        newRow.appendChild(newCell)
        newCell.innerText = "Riga " + totalOfRows + " cella" + i;
    }
    
    myTab.appendChild(newRow)  
}

function inserisciRiga(){
    let nColInput = document.querySelector("#nCol");
    let nCol = Number(nColInput.value);
    creaRiga(nCol);

    nColInput.value = ""
}