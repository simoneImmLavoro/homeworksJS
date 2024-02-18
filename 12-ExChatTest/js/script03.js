let userInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let passRepeatInput = document.querySelector("#passwordRepeat");
let formRegister= document.querySelector("#formRegister");
let alertP = document.querySelector(".alert");

let usersList = [];
let validData = false;

function User(username, password){
    this.username = username;
    this.password = password;
}

window.addEventListener("DOMContentLoaded", function(){
    usersList = takeUsersList()
    if(usersList == null){
        usersList = [];
    }
})

function saveUsersList(){
    let myUsersJSON = JSON.stringify(usersList);
    localStorage.setItem("usersList", myUsersJSON)
}

function takeUsersList(){
    let usersListJSON =  localStorage.getItem("usersList");
    let usersListOBJ = JSON.parse(usersListJSON);
    return usersListOBJ
}

console.log(usersList.length);

function checkUsers() {
    console.log("inizio check");
    let userPresent = false;
    
    if (usersList.length > 0) {
        usersList.forEach(user => {
            if(user.username === userInput.value){
                userPresent = true;
                alertP.textContent = "Attenzione Username non disponibile";
            }
        });
    }
    
    return userPresent;
}

function createUser(){
    let myUsername = userInput.value;
    let myPassword = passInput.value;
    let passwordRepeat = passRepeatInput.value;
    
    
    if(myUsername == "" || myPassword == "" || passwordRepeat == ""){
        alertP.textContent = "Per favore inserisci i dati necessari";
        validData = false;
    } else if(passwordRepeat != myPassword){
        alertP.textContent = "Attenzione le password devono coincidere";
        validData = false;
    }else {
        validData = true
    }
}


function register(){
    let myUsername = userInput.value;
    let myPassword = passInput.value;
    let userPresent = checkUsers()
    createUser()
    
    if(validData && !userPresent){
        let newUser = new User(myUsername, myPassword);
        usersList.push(newUser);
        saveUsersList();
    } else {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

formRegister.addEventListener("submit", register)