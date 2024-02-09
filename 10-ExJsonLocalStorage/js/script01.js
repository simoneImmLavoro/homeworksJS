//Istanzia un oggetto, applica il metodo stringify() per trasformarlo in JSON. 
//Salva l'oggetto in uno Storage
//Recupera l'oggetto dallo Storage e trasformalo con il metodo parse() in un oggetto utilizzabile


//Creare un oggetto e salvare in local storage le singole proprietà e relativi valori


function Ricetta(nome, tempo, difficoltà, ingredienti){
    this.nome = nome;
    this.tempo = tempo;
    this.difficoltà = difficoltà;
    this.ingredienti = ingredienti;
}


let myRecipeBook = [
    new Ricetta("Ragù", "4h", "Media", ["Salsa di pomodoro", "Carne macinata", "Tanto ammmore"]),
    new Ricetta("Crostata", "45min", "Semplice", ["Pasta frolla", "Marmellata", "Burro"])
]

myRecipeBook.forEach(ricetta => {
    console.log(ricetta);
})

myRecipeBookJSON = JSON.stringify(myRecipeBook);
localStorage.setItem("Ricettario", myRecipeBookJSON)


myRecipeBookOBJ = JSON.parse(myRecipeBookJSON)

myRecipeBook.forEach(ricetta => {
    console.log(ricetta);
})


for (let index = 0; index < myRecipeBook.length; index++) {
    let recipe = myRecipeBook[index];

    let recipeNameJSON = JSON.stringify(recipe.nome);
    localStorage.setItem("Nome ricetta " + (index + 1), recipeNameJSON);

    let recipeTimeJSON = JSON.stringify(recipe.tempo);
    localStorage.setItem("Tempo ricetta " + (index + 1), recipeTimeJSON);

    let recipeDifficultyJSON = JSON.stringify(recipe.difficoltà);
    localStorage.setItem("Difficoltà ricetta " + (index + 1), recipeDifficultyJSON);
    
    let recipeIngredientsJSON = JSON.stringify(recipe.ingredienti);
    localStorage.setItem("Ingredienti ricetta " + (index + 1), recipeIngredientsJSON);
}