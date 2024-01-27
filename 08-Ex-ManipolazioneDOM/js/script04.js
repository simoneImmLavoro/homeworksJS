let myTab = document.querySelector("#myTable");
let rows = document.querySelectorAll("#myTable tr");
let nCol = document.querySelector("#nCol");
let nRow = document.querySelector("#nRow");
let myValue = document.querySelector("#myValue");
let printBtn = document.querySelector("#printBtn");
let feed = document.querySelector("#feed");



function findPrint(row, col, value){
    let rowFound = false;
    let colFound = false;

    for(let i = 1; i < rows.length; i++){
        if(i == row){
            let cols = rows[i].querySelectorAll("td");
            rowFound = true;
            for(let g = 1; g < cols.length; g++){
                if(g == col){
                    cols[g].textContent = value;
                    colFound = true;
                }
            }
        }
    }
    
    if(!rowFound){
        let alarmP = document.createElement("p");
        alarmP.textContent = "Non esiste questa riga";
        feed.appendChild(alarmP);
    }
    
    if(!colFound){
        let alarmP = document.createElement("p");
        alarmP.textContent = "Non esiste questa colonna";
        feed.appendChild(alarmP)
    }

    if(value == ""){
        let alarmP = document.createElement("p");
        alarmP.textContent = "Il contenuto è vuoto";
        feed.appendChild(alarmP)
    }

    if (rowFound && colFound && value !== "") {
        nRow.value = "";
        nCol.value = "";
        myValue.value = "";
    }

    rowFound = false;
    colFound = false;
}



printBtn.addEventListener("click", function(){
    feed.innerHTML = "";

    let X = nRow.value;
    let Y = nCol.value;
    let content = myValue.value;

    findPrint(X,Y, content);
})