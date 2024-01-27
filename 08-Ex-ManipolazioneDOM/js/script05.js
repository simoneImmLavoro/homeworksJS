let dropList = document.querySelector("#drop-list")
let addInput = document.querySelector("#addItem")
let removeInput = document.querySelector("#removeItem")
let addBtn = document.querySelector("#addBtn")
let removeBtn = document.querySelector("#removeBtn")
let feed = document.querySelector("#feed")

addBtn.addEventListener("click", function(){
    let dropOptions = document.querySelectorAll("#drop-list option")
    let toAdd = addInput.value;
    let newOption = document.createElement("option");
    
    let existEl = false;

    dropOptions.forEach(option =>{
        if(option.value.toLowerCase() === toAdd){
            existEl = true;
        }
    })

    if(existEl){
        feed.innerHTML = "L'elemento esiste già nella tua lista!"
    } else {
        newOption.textContent = toAdd;
        newOption.value = toAdd.toLowerCase();
        dropList.appendChild(newOption);
        feed.innerHTML = "Elemento aggiunto con successo."
        addInput.value = "";
    }

    existEl = false;
})



removeBtn.addEventListener("click", function(){
    let dropOptions = document.querySelectorAll("#drop-list option")
    let toRemove = removeInput.value;

    existEl = false;

    dropOptions.forEach(option =>{
        if(option.value.toLowerCase() === toRemove){
            dropList.removeChild(option);
            feed.innerHTML = "Elemento rimosso."
            removeInput.value = "";
        } else {
            feed.innerHTML = "Non esiste nessun elemento con quel nome"
        }
    })
})