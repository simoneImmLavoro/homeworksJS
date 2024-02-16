let userInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let passRepeatInput = document.querySelector("#passwordRepeat");
let formRegister= document.querySelector("#formRegister");
let alertP = document.querySelector(".alert");

let usersList = [];
let validData = false;
let userPresent = false;

window.addEventListener("DOMContentLoaded", function(){
    usersList = takeUsersList()
    if(usersList == null){
        usersList = [];
    }
})

function saveUsersList(){
    let myUsersJSON = JSON.stringify(usersList);
    localStorage.setItem("myChat", myUsersJSON)
}

function takeUsersList(){
    let usersListJSON =  localStorage.getItem("usersList");
    let usersListOBJ = JSON.parse(usersListJSON);
    return usersListOBJ;
}

function User(username, password){
    this.username = username;
    this.password = password;
}

function checkUsers(){
    usersList.forEach(user =>{
        if(user.username == userInput.value){
            userPresent = true;
            alertP.textContent = "Attenzione, Username già in Uso";
        } else {
            userPresent = false;
        }
    })
}

function createUser(){
    let myUsername = userInput.value;
    let myPassword = passInput.value;
    let passwordRepeat = passRepeatInput.value;

    userPresent = false;

    checkUsers()

    if(userPresent){
        alertP.textContent = "Attenzione Username non disponibile"
    } else if(passwordRepeat != myPassword){
        alertP.textContent = "Attenzione le password devono coincidere"
    } else if(username != "" && password != "" && passwordRepeat != ""){
        alertP.textContent = "Per favore inserisci i dati necessari"
    }else {
        validData = true
        let newUser = new User(myUsername, myPassword);
        usersList.push(newUser);
        saveUsersList();
    }
    }




function register(){


    if(validData){
        localStorage.setItem("usersList", saveUsersList());
    } else {
        alertP.textContent = "Per favore inserisci i dati necessari"
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

formRegister.addEventListener("submit", register)