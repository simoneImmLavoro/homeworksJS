let userInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let formLogin = document.querySelector("#formLogin");
let alertP = document.querySelector(".alert");

let usersList = [];

function takeUsersList(){
    let usersListJSON =  localStorage.getItem("usersList");
    let usersListOBJ = JSON.parse(usersListJSON);
    return usersListOBJ
}

window.addEventListener("DOMContentLoaded", function(){
    localStorage.removeItem("userConnesso")

    usersList = takeUsersList()
    if(usersList == null){
        usersList = [];
    }

    alertP.textContent = "";
    userInput.value = "";
    passInput.value = "";
})


function checkUser(){
    if (usersList.length > 0) {
        for(let i = 0; i < usersList.length; i++){
            if(usersList[i].username == userInput.value){
                if (usersList[i].password === passInput.value) {
                    return true; 
                } else {
                    alertP.textContent = "Password errata";
                    return false;
                }
            }
        }
    }
    alertP.textContent = "Non esistono utenti con questo Username"
    return false;
}


function login(){
    let username = userInput.value;
    let password = passInput.value;

    if(username != "" && password != ""){
        if(checkUser()){
            localStorage.setItem("userConnesso", username);
        } else{
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    } else {
        alertP.textContent = "Per favore inserisci i dati necessari"
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

formLogin.addEventListener("submit", login)

userInput.addEventListener("focus", function(){
        alertP.textContent = "";
})


passInput.addEventListener("focus", function(){
        alertP.textContent = "";
})