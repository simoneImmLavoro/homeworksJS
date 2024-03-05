let gallery = document.querySelector("#gallery")


let myDbSpettacoli = "http://localhost:3000/spettacoli"

fetch(myDbSpettacoli)
    .then(data => {
        return data.json();
    })
    .then(response => {
        response.forEach(film => {            
            aggiungiCard(film)
            if(film.scadenza == 1){
                console.log(film.titolo);
            } else {
                console.log("Film scaduto " + film.titolo);
            }
        })
    })


function aggiungiCard(film){
    let firstDiv = document.createElement("div");
    let rowDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let textDiv = document.createElement("div");
    let bodyDiv = document.createElement("div");
    let titolo = document.createElement("h5");
    let prezzo = document.createElement("p");
    let durata = document.createElement("p");
    let btn = docume.createElement("button");

    firstDiv.setAttribute("class", "card mb-3 col-4")
    rowDiv.setAttribute("class", "row g-0")
    imgDiv.setAttribute("class", "col-md-4")
    img.setAttribute("class", "img-fluid rounded-start")
    img.setAttribute("src", film.locandina)
    textDiv.setAttribute("class", "col-md-8")
    bodyDiv.setAttribute("class", "card-body")
    titolo.setAttribute("class", "card.text")

}