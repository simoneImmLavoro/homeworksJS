let divResoconto = document.querySelector("#elResoconto");
let divTotale = document.querySelector("#elTotale");

let totalTot = 0

function caricaProdotti(){
    if(localStorage.key("cartList") != null){
        let prodotti = JSON.parse(localStorage.getItem("cartList"));

        prodotti.forEach(prodotto => {
            divResoconto.innerHTML += `<li> ${prodotto.brand} - <img src="${prodotto.thumbnail}"></li>`;
            totalTot += Number(prodotto.price);
        })
        divTotale.innerHTML = `<h2> ${totalTot}</h2>`
    }
}

window.addEventListener("DOMContentLoaded", caricaProdotti)