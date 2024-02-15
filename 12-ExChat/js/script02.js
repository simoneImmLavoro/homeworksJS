let userInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let formLogin = document.querySelector("#formLogin");
let alertP = document.querySelector(".alert");


function login(){
    let username = userInput.value;
    let password = passInput.value;

    if(username != "" && password != ""){
        localStorage.setItem("userConnesso", username);
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