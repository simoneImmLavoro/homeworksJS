let gallery = document.querySelector(".gallery")
let oldGallery = document.querySelector(".oldGallery")


let myDbSpettacoli = "http://localhost:3000/spettacoli"

fetch(myDbSpettacoli)
    .then(data => {
        return data.json();
    })
    .then(response => {
        response.forEach(film => {            
            if(film.scadenza == 1){
                aggiungiCard(film);
            } else {
                createOldFilms(film)
            }
        })
    })


function aggiungiCard(film){
    let parentDiv = document.createElement("div");
    let firstDiv = document.createElement("div");
    let titolo = document.createElement("h4");
    let rowDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let textDiv = document.createElement("div");
    let bodyDiv = document.createElement("div");
    let descrDiv = document.createElement("div");
    let durata = document.createElement("p");
    let prezzo = document.createElement("p");
    let btnDiv = document.createElement("div");
    let btn = document.createElement("button");

    parentDiv.setAttribute("class", "card col-4 p-0 m-0 border-0")
    titolo.setAttribute("class", "card-title text-center m-3")
    firstDiv.setAttribute("class", "card col-4 p-0 m-0 border-0")
    rowDiv.setAttribute("class", "row justify-content-center")
    imgDiv.setAttribute("class", "col-7 imgDiv d-flex align-items-center")
    img.setAttribute("class", "img-fluid w-100")
    img.setAttribute("src", film.locandina)
    textDiv.setAttribute("class", "col-6")
    bodyDiv.setAttribute("class", "card-body d-flex flex-column justify-content-between p-0")
    descrDiv.setAttribute("class", "text-box d-flex justify-content-evenly m-3")
    durata.setAttribute("class", "card-text m-0")
    prezzo.setAttribute("class", "card-text m-0")
    btnDiv.setAttribute("class", "d-flex justify-content-center mb-3")
    btn.setAttribute("class", "btn btn-primary w-50 mb-4")

    titolo.textContent = film.titolo;
    durata.textContent = film.durata + "min"
    prezzo.textContent = film.prezzo + "€"
    btn.textContent = "Prenota il tuo posto"

    btnDiv.appendChild(btn);
    descrDiv.appendChild(durata)
    descrDiv.appendChild(prezzo)
    bodyDiv.appendChild(descrDiv)
    textDiv.appendChild(bodyDiv)
    imgDiv.appendChild(img)

    rowDiv.appendChild(imgDiv)
    rowDiv.appendChild(descrDiv)
    rowDiv.appendChild(btnDiv)

    parentDiv.appendChild(titolo)
    parentDiv.appendChild(rowDiv)

    gallery.appendChild(parentDiv)
}

function createOldFilms(film){
    let firstDiv = document.createElement("div");
    let img = document.createElement("img");

    firstDiv.setAttribute("class", "card col-2 border-0")
    img.setAttribute("class", "img-fluid w-100 card-img-top")
    img.setAttribute("src", film.locandina)

    firstDiv.appendChild(img)
    oldGallery.appendChild(firstDiv)
}