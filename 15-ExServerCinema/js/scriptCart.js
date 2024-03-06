let cartDiv = document.querySelector(".cart-area")
let quanti = document.querySelector("#quanti")
let totalSpan = document.querySelector(".total")




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
            response.forEach(film =>{
                for(let i=0; i < myCart.length; i++){
                    if(film.id == myCart[i]){
                        createItem(film)
                    }
                }
                quanti.textContent = myCart.length
            })
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
    price.setAttribute("class", "mb-0 fw-medium");
    hr.setAttribute("class", "my-3 ");

    minus.textContent = "-";
    plus.textContent = "+";
    title.textContent = film.titolo;
    price.textContent = "€ " + (film.prezzo * input.value)

    minus.addEventListener("click", function(){
        let actualValue = input.value;
        if(actualValue > 0){
            actualValue--
            input.value = actualValue
            price.textContent = "€ " + (film.prezzo * input.value)
        }
    })
    
    plus.addEventListener("click", function(){
        let actualValue = input.value;
            actualValue++
            input.value = actualValue
            price.textContent = "€ " + (film.prezzo * input.value)
    })

    imgDiv.appendChild(img);
    secondDiv.appendChild(title);
    thirtInnerDiv.appendChild(minus);
    thirtInnerDiv.appendChild(input);
    thirtInnerDiv.appendChild(plus);
    thirtDiv.appendChild(thirtInnerDiv);
    forthInnerDiv.appendChild(price)

    parentDiv.appendChild(imgDiv)
    parentDiv.appendChild(secondDiv)
    parentDiv.appendChild(thirtDiv)
    parentDiv.appendChild(forthInnerDiv)
    
    cartDiv.appendChild(parentDiv)
    cartDiv.appendChild(hr)
}

function calculateTotal(){
    let amounts = document.querySelectorAll("#amount");
    let total = 0;

    amounts.forEach(amount =>{
        total += amount.value
    })

    totalSpan.textContent = total
}

