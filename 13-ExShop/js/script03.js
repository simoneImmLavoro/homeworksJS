let listaElementi = document.querySelector("#elListaProdotti");
let linkCart = document.querySelector("#cartLink");

let prodURL = "https:dummyjson.com/products";

let mySavedProducts = [];

fetch(prodURL)
    .then(data => {
        return data.json()
    })
    .then( response => {
        let myProducts = response.products;

        myProducts.forEach(prodotto =>{
            creaItem(prodotto)
        })
    }
    )

function creaItem(prodotto){
    let li = document.createElement("li");
    let buttCart = document.createElement("button");
    let iconSpan = document.createElement("span");

    iconSpan.setAttribute("class", "bi bi-cart");
    buttCart.setAttribute("class", "btn btn-primary");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-baseline");
    li.innerHTML = `${prodotto.brand} - ${prodotto.title} - ${prodotto.price}$`;

    listaElementi.appendChild(li)
    li.appendChild(buttCart)
    buttCart.appendChild(iconSpan)

    let mioProdotto = prodotto;

    buttCart.addEventListener("click", function(){
        saveItem(mioProdotto);
    });
}

function saveItem(mioProdotto){
    mySavedProducts.push(mioProdotto);
    console.log(mySavedProducts);
}

function saveCartList(){
    let myListOBJ = JSON.stringify(mySavedProducts);
    localStorage.setItem("cartList", myListOBJ)
}

linkCart.addEventListener("click", function(){
    saveCartList()
})

