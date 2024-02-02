let addTitleInput = document.querySelector("#titolo");
let addImmagineInput = document.querySelector("#locandina");
let addWikiInput = document.querySelector("#wiki");
let addAttoriInput = document.querySelector("#attori");
let addRegistaInput = document.querySelector("#regista");
let addDurataInput = document.querySelector("#durata");
let addPrezzoInput = document.querySelector("#prezzo");
let plusActor = document.querySelector("#plusActor")

///////////////scheda anteprima vuota ///////////////

function creaAnteprima(addFilm){
    let clientSide = document.querySelector("#client-side");
    let clientPanel = document.createElement("div");
    
    clientPanel.classList.add("preview");
    
    // elementi dell'immagine
    let imgBoxPreview = document.createElement("div");
    let imgLinkPreview = document.createElement("a");
    let imgTagPreview = document.createElement("img");
    // elementi della descrizione
    let descrizioneBoxPreview = document.createElement("div");
    let titoloH3Preview = document.createElement("h3");
    let listaUlPreview = document.createElement("ul");
    let registaPPreview = document.createElement("p");
    let durataPPreview = document.createElement("p");
    let prezzoPPreview = document.createElement("p");
    
    clientPanel.appendChild(imgBoxPreview);
    clientPanel.appendChild(descrizioneBoxPreview);

    imgLinkPreview.setAttribute("href", addFilm.wiki);
    imgTagPreview.setAttribute("src", addFilm.locandinaUrl);
    titoloH3Preview.textContent = addFilm.titolo;
    registaPPreview.textContent = "Regista: " + addFilm.regista;
    listaUlPreview.textContent = "Attori:";
    
    for(let i= 0; i < addFilm.attori.length; i++){
        let attoreNome = document.createElement("li"); 
        attoreNome.textContent = addFilm.attori[i];
        listaUlPreview.appendChild(attoreNome);
    }
    
    durataPPreview.textContent = "Durata: " + addFilm.durata + "min";
    prezzoPPreview.textContent = "Prezzo: " + addFilm.prezzo + "€";
    
    clientSide.appendChild(clientPanel)
    clientPanel.appendChild(imgBoxPreview)
    clientPanel.appendChild(descrizioneBoxPreview)
    imgBoxPreview.appendChild(imgLinkPreview);
    imgLinkPreview.appendChild(imgTagPreview);

    clientPanel.classList.add("film-card");
    imgBoxPreview.classList.add("locandina")
    descrizioneBoxPreview.classList.add("descr-container")

    imgTagPreview.classList.add("imgPreview")
    imgLinkPreview.classList.add("wikiPreview")
    titoloH3Preview.classList.add("titoloPreview");
    listaUlPreview.classList.add("ulPreview");
    registaPPreview.classList.add("registaPreview");
    durataPPreview.classList.add("durataPreview");
    prezzoPPreview.classList.add("prezzoPreview");

    descrizioneBoxPreview.appendChild(titoloH3Preview);
    descrizioneBoxPreview.appendChild(registaPPreview);
    descrizioneBoxPreview.appendChild(listaUlPreview);
    descrizioneBoxPreview.appendChild(durataPPreview);
    descrizioneBoxPreview.appendChild(prezzoPPreview);

    let confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm")
    confirmButton.textContent = "Inserisci film"
    descrizioneBoxPreview.appendChild(confirmButton)

}

let sample = new Film("Titolo", "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg", "", "", "", "", "")

creaAnteprima(sample)

///////////////////////events blur sugli input/////////////

addTitleInput.addEventListener("blur", function(){
    let titolo = document.querySelector(".titoloPreview")

    titolo.textContent = this.value;
})


addImmagineInput.addEventListener("blur", function(){
    let img = document.querySelector(".imgPreview")

    img.setAttribute("src", this.value);

})


addWikiInput.addEventListener("blur", function(){
    let wiki = document.querySelector(".wikiPreview")

    wiki.setAttribute("href", this.value);

})


let arrActors = [];

plusActor.addEventListener("click", function(){
    let actors = document.querySelector(".ulPreview")
    let actorsLi = actors.querySelectorAll("li")

    actorsLi.forEach(li =>{
        actors.removeChild(li)
    })
    

    let addAttori = addAttoriInput.value;
    arrActors.push(addAttori);
    
    
    
    for(let i= 0; i < arrActors.length; i++){
            let attoreNome = document.createElement("li"); 
            attoreNome.textContent = arrActors[i];
            actors.appendChild(attoreNome);
        }

})

addRegistaInput.addEventListener("blur", function(){
    let regista = document.querySelector(".registaPreview")
    regista.textContent = "Regista:" + this.value;

})


addDurataInput.addEventListener("blur", function(){
    let durata = document.querySelector(".durataPreview")

    durata.textContent = "Durata:" + this.value + "min";
})


addPrezzoInput.addEventListener("blur", function(){
    let prezzo = document.querySelector(".prezzoPreview")

    prezzo.textContent ="Prezzo:" + this.value + "€";
})


function inserisciNuovo(){
    let addTitle = addTitleInput.value;
    let addImmagine = addImmagineInput.value;
    let addWiki = addWikiInput.value;
    let addRegista = addRegistaInput.value;
    let addDurata = addDurataInput.value;
    let addPrezzo = addPrezzoInput.value;
    let clientSide = document.querySelector("#client-side");
    let clientPanel = document.querySelector(".preview")
    let cardContainer = document.querySelector("#carousel")
    let alertP = document.querySelector(".alert")
    
    
    if (addTitle !== "" && addImmagine !== "" && addWiki !== "" && addRegista !== "" && addDurata !== "" && addPrezzo !== ""){

        alertP.textContent = ""

        let addFilm = new Film(addTitle, addImmagine, addWiki, arrActors, addRegista, addDurata, addPrezzo)
        
        myFilms.push(addFilm)
        
        addTitleInput.value = "";
        addImmagineInput.value = "";
        addWikiInput.value = "";
        addRegistaInput.value = "";
        addDurataInput.value = "";
        addPrezzoInput.value = "";
        clientSide.removeChild(clientPanel)
        creaAnteprima(sample)


        cardContainer.innerHTML = '';
        
        myFilms.forEach(film =>{
            createCard(film)
        })
        
    } else  {
        alertP.textContent = "Per favore inserisci tutti i dati necessari"
    }
    
}



let confirmButton = document.querySelector(".confirm");
confirmButton.addEventListener("click", function(){
    inserisciNuovo()
})
