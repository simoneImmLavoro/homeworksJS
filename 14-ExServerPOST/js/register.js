let nomeInput = document.querySelector("#nome")
let cognomeInput = document.querySelector("#cognome")
let emailInput = document.querySelector("#email")
let telInput = document.querySelector("#tel")
let usernameInput = document.querySelector("#username")
let passwordInput = document.querySelector("#password")
let alertP = document.querySelector("#alert")
let registerForm = document.querySelector("#registerForm")

let myUsers = [];
let newUser;
const ENDPOINT = "http://localhost:3000/users"
let validData = false;

fetch(ENDPOINT)
    .then(data => {
        return data.json()
    })
    .then(response => {
        myUsers = response
    })

function User(nome, cognome, email, tel, username, password, id, status) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.tel = tel;
    this.username = username;
    this.password = password;
    this.id = id;
    this.status = status;
}

function saveUsersList() {
    fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            return response.json();
        })
}

function userPresence() {
    let userPresent = false;

    if (myUsers.length > 0) {
        myUsers.forEach(user => {
            if (user.username === username.value) {
                userPresent = true;
                alertP.textContent = "Attenzione Username non disponibile";
            }
        });
    }

    return userPresent;
}

function createUser() {
    let nome = nomeInput.value;
    let cognome = cognomeInput.value;
    let email = emailInput.value;
    let username = usernameInput.value;
    let password = passwordInput.value;
    let tel = telInput.value;

    if (username == "" || password == "" || nome == "" || cognome == "" || email == "" || tel == "") {
        alertP.textContent = "Per favore inserisci i dati necessari";
        validData = false;
    } else {
        validData = true;
    }
}

function registeNewUser(event) {
    event.preventDefault();
    createUser();
    let userPresent = userPresence(event);

    if (!userPresent && validData) {
        let id = myUsers.length + 1;
        let nome = nomeInput.value;
        let cognome = cognomeInput.value;
        let email = emailInput.value;
        let tel = telInput.value;
        let username = usernameInput.value;
        let password = passwordInput.value;

        newUser = new User(nome, cognome, email, tel, username, password, id, "offline")
        saveUsersList();
        window.location.href = "./login.html";
    } else {
        event.stopImmediatePropagation();
    }
}

registerForm.addEventListener("submit", registeNewUser)
