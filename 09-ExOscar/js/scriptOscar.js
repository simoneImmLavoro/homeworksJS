let btnPrev = document.querySelector("#btnIndietro");
let btnNext = document.querySelector("#btnAvanti");
let carousel = document.querySelector("#carousel");

function Film(titolo, locandinaUrl, wiki, attori, regista, durata, prezzo){
    this.titolo = titolo;
    this.locandinaUrl = locandinaUrl,
    this.wiki = wiki,
    this.attori = attori,
    this.regista = regista,
    this.durata = durata,
    this.prezzo = prezzo
}

let myFilms = [
    new Film("Everything Everywhere All at Once", "https://pad.mymovies.it/filmclub/2022/03/243/locandinapg1.jpg", "https://it.wikipedia.org/wiki/Everything_Everywhere_All_at_Once", ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"], "Daniel Kwan", "139min", "5.99€"),
    new Film("Avatar - La via dell'acqua", "https://pad.mymovies.it/filmclub/2010/10/203/locandinapg1.jpg", "https://it.wikipedia.org/wiki/Avatar_-_La_via_dell%27acqua", ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], "	James Cameron", "192min", "5.99€"),
    new Film("Gli spiriti dell'isola", "https://pad.mymovies.it/filmclub/2022/07/081/locandinapg1.jpg", "https://it.wikipedia.org/wiki/Gli_spiriti_dell%27isola", ["Colin Farrell", "Brendan Gleeson", "Kerry Condon"], "Martin McDonagh", "114min", "5.99€"),
    new Film("Elvis", "https://pad.mymovies.it/filmclub/2019/08/035/imm.jpg", "https://it.wikipedia.org/wiki/Elvis_(film_2022)", ["Austin Butler", "Chaydon Jay", "Tom Hanks"], "	Baz Luhrmann", "157min", "5.99€"),
    new Film("Niente di nuovo sul fronte occidentale", "https://pad.mymovies.it/filmclub/2022/09/024/imm.jpg", "https://it.wikipedia.org/wiki/Niente_di_nuovo_sul_fronte_occidentale_(film_2022)", ["Felix Kammerer", "Albrecht Schuch", "Daniel Brühl"], "Edward Berger", "148min", "5.99€")
]


/**
 * 
 * @param {Film} filmToPrint 
*/
function createCard(filmToPrint){
    let container = document.createElement("div")
    // elementi dell'immagine
    let imgBox = document.createElement("div");
    let imgLink = document.createElement("a");
    let imgTag = document.createElement("img");
    // elementi della descrizione
    let descrizioneBox = document.createElement("div");
    let titoloH3 = document.createElement("h3");
    let listaUl = document.createElement("ul");
    let registaP = document.createElement("p");
    let durataP = document.createElement("p");
    let prezzoP = document.createElement("p");


    carousel.appendChild(imgBox);
    imgLink.setAttribute("href", filmToPrint.wiki);
    imgTag.setAttribute("src", filmToPrint.locandinaUrl);
    titoloH3.textContent = filmToPrint.titolo;
    registaP.textContent = "Regista: " + filmToPrint.regista;
    listaUl.textContent = "Attori:";

    for(let i= 0; i < filmToPrint.attori.length; i++){
        let attoreNome = document.createElement("li"); 
        attoreNome.textContent = filmToPrint.attori[i];
        listaUl.appendChild(attoreNome);
    }

    durataP.textContent = "Durata: " + filmToPrint.durata;
    prezzoP.textContent = "Prezzo: " + filmToPrint.prezzo;

    carousel.appendChild(container)
    container.appendChild(imgBox)
    container.appendChild(descrizioneBox)

    imgBox.appendChild(imgLink);
    imgLink.appendChild(imgTag);

    container.classList.add("film-card");
    imgBox.classList.add("locandina")
    descrizioneBox.classList.add("descr-container")



    descrizioneBox.appendChild(titoloH3);
    descrizioneBox.appendChild(registaP);
    descrizioneBox.appendChild(listaUl);
    descrizioneBox.appendChild(durataP);
    descrizioneBox.appendChild(prezzoP);

}


createCard(myFilms[0]);
let currentI = 0;

function updateCarousel() {
    // Rimuovi solo il primo elemento figlio
    if (carousel.firstElementChild) {
        carousel.firstElementChild.remove();
    }
    createCard(myFilms[currentI]);
}

btnPrev.addEventListener("click", function() {
    if (currentI > 0) {
        currentI--;
    } else {
        currentI = myFilms.length - 1;
    }
    updateCarousel();
});

btnNext.addEventListener("click", function() {
    if (currentI < myFilms.length - 1) {
        currentI++;
    } else {
        currentI = 0;
    }
    updateCarousel();
});
