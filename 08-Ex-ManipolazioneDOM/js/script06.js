let dropList = document.querySelector("#drop-list");
let countBtn = document.querySelector("#countBtn");


countBtn.addEventListener("click", function(){
    let dropOptions = document.querySelectorAll("#drop-list option");
    
    window.alert("Gli elementi nella tua lista sono " + dropOptions.length)
})