let listaElementi = document.querySelector("#elListaProdotti");

let prodURL = "https:dummyjson.com/products";

fetch(prodURL)
    .then(data => {
        return data.json()
    })
    .then( response => {
        let myProducts = response.products;
        console.log(myProducts);

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
}