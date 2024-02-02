let addTitleInput = document.querySelector("#titolo");
let addImmagineInput = document.querySelector("#locandina");
let addWikiInput = document.querySelector("#wiki");
let addAttoriInput = document.querySelector("#attori");
let addRegistaInput = document.querySelector("#regista");
let addDurataInput = document.querySelector("#durata");
let addPrezzoInput = document.querySelector("#prezzo");
let plusActor = document.querySelector("#plusActor");
let minusActor = document.querySelector("#minusActor");
let alertP = document.querySelector(".alert")
let deleteInput = document.querySelector("#deleteInput")
let removeFilmBtn = document.querySelector("#removeFilmBtn");
let removeFilmField = document.querySelector(".remove-film");
let lastResortBtns =document.querySelector(".last-resort")
let btnYes = document.querySelector(".btnYes");
let btnNo = document.querySelector(".btnNo");

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
    alertP.textContent = ""
    let titolo = document.querySelector(".titoloPreview")

    titolo.textContent = this.value;
})


addImmagineInput.addEventListener("blur", function(){
    let img = document.querySelector(".imgPreview")

    img.setAttribute("src", this.value);

})


addWikiInput.addEventListener("blur", function(){
    alertP.textContent = ""
    let wiki = document.querySelector(".wikiPreview")

    if(this.value.startsWith("https://")){
        wiki.setAttribute("href", this.value);;
    } else {
        let correctUrl = "https://" + this.value;
        wiki.setAttribute("href", correctUrl);
    }

    wiki.setAttribute("target", "_blank");
})


let arrActors = [];

plusActor.addEventListener("click", function(){
    let actors = document.querySelector(".ulPreview")
    let actorsLi = actors.querySelectorAll("li")

    alertP.textContent = ""

    actorsLi.forEach(li =>{
        actors.removeChild(li)
    })
    

    let addAttori = addAttoriInput.value;

    if(addAttori != ""){
        arrActors.push(addAttori);
        alertP.textContent="Attore aggiunto con successo!"
        addAttoriInput.value = "";
    } else {
        alertP.textContent = "Non puoi aggiungere un Attore vuoto."
    }
    
    
    for(let i= 0; i < arrActors.length; i++){
            let attoreNome = document.createElement("li"); 
            attoreNome.textContent = arrActors[i];
            actors.appendChild(attoreNome);
        }

        
})

minusActor.addEventListener("click", function(){
    let actors = document.querySelector(".ulPreview")
    let actorsLi = actors.querySelectorAll("li")

    alertP.textContent = ""


    for(let i= 0; i < arrActors.length; i++){
        if(arrActors[i] == addAttoriInput.value){
            arrActors.splice(i,1)

            actorsLi.forEach(li =>{
                actors.removeChild(li)
            })

            for(let i= 0; i < arrActors.length; i++){
                let attoreNome = document.createElement("li"); 
                attoreNome.textContent = arrActors[i];
                actors.appendChild(attoreNome);
            }

            alertP.textContent = "Attore rimosso!"
        }  else {
            alertP.textContent = "Quell'attore non è presente nella lista"
        }
    }

    if(arrActors.length == 0){
        alertP.textContent = "La tua lista di attori è già vuota"
    }

})

addRegistaInput.addEventListener("blur", function(){
    alertP.textContent = ""
    let regista = document.querySelector(".registaPreview")
    regista.textContent = "Regista:" + this.value;

})


addDurataInput.addEventListener("blur", function(){
    alertP.textContent = ""
    let durata = document.querySelector(".durataPreview")
    
    durata.textContent = "Durata:" + this.value + "min";
})


addPrezzoInput.addEventListener("blur", function(){
    alertP.textContent = ""
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
    
    
    if (addTitle !== "" && addImmagine !== "" && addWiki !== "" && addRegista !== "" && addDurata !== "" && addPrezzo !== "" && arrActors.length > 0){

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
        
        alertP.textContent = "Scheda film aggiunta con successo!!!"

        carousel.style.left = 0;

    } else  {
        alertP.textContent = "Per favore inserisci tutti i dati necessari"
    }
    
}



let confirmButton = document.querySelector(".confirm");
confirmButton.addEventListener("click", function(){
    inserisciNuovo()
})



let filmPresente = false;

removeFilmBtn.addEventListener("click", function(){
    let deleteFilm = deleteInput.value.toLowerCase();
    filmPresente = false;

    for(let i = 0; i < myFilms.length; i++){
        if(myFilms[i].titolo.toLowerCase() == deleteFilm){
            filmPresente = true;
            break;
        }
    }
    
    if (filmPresente) {
        removeFilmBtn.disabled = true;
        removeFilmBtn.classList.remove("hoverBtn")

        alertP.textContent = "Attenzione! La seguente procedura non è reversibile. Per confermare o annullare, premi i rispettivi bottoni.";

        btnNo.style.display = "inline";
        btnYes.style.display = "inline";
    } else {
        alertP.textContent = "Il film non è presente tra le slides, controlla il titolo inserito";
    }

});



btnNo.addEventListener("click", function () {
    btnNo.style.display = "none";
    btnYes.style.display = "none";
    deleteInput.value = ""; 
    removeFilmBtn.disabled = false;
    removeFilmBtn.classList.add("hoverBtn")
    filmPresente = false;
    alertP.textContent = "Procedura annullata come richiesto!"
});



btnYes.addEventListener("click", function(){
    let deleteFilm = deleteInput.value.toLowerCase();
    let cardContainer = document.querySelector("#carousel")
    
    btnNo.style.display = "none";
    btnYes.style.display = "none";
    deleteInput.value = "";
    removeFilmBtn.disabled = false;
    removeFilmBtn.classList.add("hoverBtn")
    filmPresente = false;
    alertP.textContent = "Elemento eliminato definitivamente";

    for(let i = 0; i < myFilms.length; i++){
        if(myFilms[i].titolo.toLowerCase() == deleteFilm){
            myFilms.splice(i, 1);
            filmPresente = true;
            break;
        }
    }

    cardContainer.innerHTML = '';
        
        myFilms.forEach(film =>{
            createCard(film)
        })

        carousel.style.left = 0;

        if(myFilms.length == 0){
            alertP.textContent = "ATTENZIONE, Lista film vuota, nessuna card verrà visualizzata."
        }
})