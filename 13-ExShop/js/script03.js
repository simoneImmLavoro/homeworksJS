let listaElementi = document.querySelector("#elListaProdotti");
let linkCart = document.querySelector("#cartLink");

let prodURL = "https:dummyjson.com/products";

let mySavedProducts = [];

window.addEventListener("DOMContentLoaded", caricaProdotti)

fetch(prodURL)
    .then(data => {
        return data.json()
    })
    .then( response => {
        let myProducts = response.products;

        myProducts.forEach(prodotto =>{
            listaElementi.appendChild(creaItem(prodotto))
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

    buttCart.addEventListener("click", function(){
        saveItem(prodotto);
    });

    return li;
}

function saveItem(prodotto){
    mySavedProducts.push(prodotto);
    console.log(mySavedProducts);
}


function caricaProdotti(){
    if(localStorage.key("cartList") != null){
        mySavedProducts = JSON.parse(localStorage.getItem("cartList"));
        }
    return mySavedProducts;
}

function saveCartList(arrayProdotti){
    let myListOBJ = JSON.stringify(arrayProdotti);

    localStorage.setItem("cartList", myListOBJ)
}

linkCart.addEventListener("click", function(){
    saveCartList(mySavedProducts)
})

