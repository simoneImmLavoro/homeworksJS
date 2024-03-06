let cartDiv = document.querySelector(".cart-area")
let quanti = document.querySelector("#quanti")
let totalSpan = document.querySelector(".total")
let nomeInput = document.querySelector("#nome")
let cognomeInput = document.querySelector("#cognome")
let telInput = document.querySelector("#tel")
let emailInput = document.querySelector("#email")
let buyBtn = document.querySelector("#buy")


let granTotal = 0;
let myCart = []
let ENDPOINT = "http://localhost:3000/spettacoli"



function takeElements(){
    let cartElementsJSON =  localStorage.getItem("temporaryCart");
    let cartElementsOBJ = JSON.parse(cartElementsJSON);
    return cartElementsOBJ
}

window.addEventListener('DOMContentLoaded', function(){
    myCart = takeElements()
    if(myCart == null){
        myCart = [];
    }

    this.fetch(ENDPOINT)
        .then(data =>{
            return data.json()
        })
        .then(response =>{
            if (myCart.length === 0) {
                cartDiv.innerHTML += `<h1>Il tuo carrello è vuoto, torna alla Home</h1>`;
            } else {
                response.forEach(film => {
                    for (let i = 0; i < myCart.length; i++) {
                        if (film.id == myCart[i]) {

                            createItem(film);
                            calculateTotal();
                        }
                    }
                });
            }
            
            quanti.textContent = myCart.length;
            
        })
    });
    

function createItem(film){
    let parentDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let secondDiv = document.createElement("div");
    let title = document.createElement("div");
    let thirtDiv = document.createElement("div");
    let thirtInnerDiv = document.createElement("div");
    let plus = document.createElement("small");
    let input = document.createElement("input");
    let minus = document.createElement("small");
    let forthInnerDiv = document.createElement("div");
    let eur = document.createElement("p")
    let price = document.createElement("p");
    let hr = document.createElement("hr");


    parentDiv.setAttribute("class", "item row");
    imgDiv.setAttribute("class", "col-12 col-lg-2");
    img.setAttribute("class", "img-fluid w-100");
    img.setAttribute("src", film.locandina);
    secondDiv.setAttribute("class", "col-6 col-lg-4 d-flex flex-lg-column justify-content-start justify-content-lg-center align-items-center mt-2 mt-lg-0")
    title.setAttribute("class","fw-medium mb-0");
    thirtDiv.setAttribute("class", "col-6 col-lg-2 d-flex justify-content-lg-between");
    thirtInnerDiv.setAttribute("class", "d-flex align-items-center justify-content-lg-center");
    thirtDiv.setAttribute("id", "quantity");
    minus.setAttribute("class", "text-primary");
    plus.setAttribute("class", "text-primary");
    minus.style.cursor= "pointer";
    plus.style.cursor= "pointer";
    input.setAttribute("class", "mx-2 p-1 form-control");
    input.setAttribute("id", "amount");
    input.setAttribute("type", "number");
    input.setAttribute("value", "1");
    forthInnerDiv.setAttribute("class", "col-12 col-lg-4 d-flex align-items-lg-center justify-content-lg-center");
    eur.setAttribute("class", "me-1 my-0")
    price.setAttribute("class", "mb-0 fw-medium");
    price.setAttribute("id", "priceDiv");
    hr.setAttribute("class", "my-3 ");

    minus.textContent = "-";
    plus.textContent = "+";
    title.textContent = film.titolo;
    price.textContent = (film.prezzo * input.value)
    eur.textContent = "€"

    minus.addEventListener("click", function(){
        let actualValue = input.value;
        if(actualValue > 0){
            actualValue--
            input.value = actualValue
            price.textContent = (film.prezzo * input.value)
            calculateTotal()
        }
    })
    
    plus.addEventListener("click", function(){
        let actualValue = input.value;
            actualValue++
            input.value = actualValue
            price.textContent = (film.prezzo * input.value)
            calculateTotal()
    })

    imgDiv.appendChild(img);
    secondDiv.appendChild(title);
    thirtInnerDiv.appendChild(minus);
    thirtInnerDiv.appendChild(input);
    thirtInnerDiv.appendChild(plus);
    thirtDiv.appendChild(thirtInnerDiv);
    forthInnerDiv.appendChild(eur)
    forthInnerDiv.appendChild(price)

    parentDiv.appendChild(imgDiv)
    parentDiv.appendChild(secondDiv)
    parentDiv.appendChild(thirtDiv)
    parentDiv.appendChild(forthInnerDiv)
    
    cartDiv.appendChild(parentDiv)
    cartDiv.appendChild(hr)
}

function calculateTotal(){
    let prices = document.querySelectorAll("#priceDiv");
    let total = 0;

    prices.forEach(price =>{
        total += Number(price.textContent)
    })
    
    totalSpan.textContent = "€ " + total;
}

function storeData(){
    let nome = nomeInput.value;
    let cognome = cognomeInput.value;
    let email = emailInput.value;
    let tel = telInput.value;

    let purchase = {
        "persona" : nome + " " + cognome,
        "email": email,
        "tel": tel,
        "biglietti": [
            "cose"
        ],
        "totale": calculateTotal()
    }

    fetch("http://localhost:3000/bigliettiAcquistati",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(purchase)
    })
    .then(data => {
        return data.json()
    })
}

buyBtn.addEventListener("click", storeData)