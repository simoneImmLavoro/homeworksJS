let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let alertP = document.querySelector("#alert");
let formLogin = document.querySelector("#formLogin");

const ENDPOINT = "http://localhost:3000/users"

let myUsers = [];

fetch(ENDPOINT)
    .then(data => {
        return data.json()
    })
    .then(response => {
        myUsers = response
    })

    function validateAccess() {
        if (myUsers.length > 0) {
            for (let i = 0; i < myUsers.length; i++) {
                if (myUsers[i].username.toUpperCase() == usernameInput.value.toUpperCase()) {
                    if (myUsers[i].password === passwordInput.value) {
                        return true;
                    } else {
                        alertP.textContent = "Password errata";
                        return false;
                    }
                }
            }
            alertP.textContent = "Non esistono utenti con questo Username";
            return false;
        }
        alertP.textContent = "Non esistono utenti con questo Username";
        return false;
    }

function login(event) {
    event.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username != "" && password != "") {
        if (validateAccess()) {
            window.location.href = "./main.html";
        } else {
            event.stopImmediatePropagation();
        }
    } else {
        alertP.textContent = "Per favore inserisci i dati necessari";
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

formLogin.addEventListener("submit", login);
