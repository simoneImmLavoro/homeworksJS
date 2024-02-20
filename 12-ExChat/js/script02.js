let userInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let formLogin = document.querySelector("#formLogin");
let alertP = document.querySelector(".alert");

let usersList = [];
let myMessages= [];
let userAllowed = "";
let userLastAccess = 0;

function takeUsersList(){
    let usersListJSON =  localStorage.getItem("usersList");
    let usersListOBJ = JSON.parse(usersListJSON);
    return usersListOBJ
}

function saveUsersList(){
    let myUsersJSON = JSON.stringify(usersList);
    localStorage.setItem("usersList", myUsersJSON)
}

function takeOldChat(){
    let previousChatJSON =  localStorage.getItem("myChat");
    let previousChatOBJ = JSON.parse(previousChatJSON);
    return previousChatOBJ;
}

function saveLocalchat(){
    let myMessagesJSON = JSON.stringify(myMessages);
    localStorage.setItem("myChat", myMessagesJSON)
}


window.addEventListener("DOMContentLoaded", function(){
    localStorage.removeItem("userConnesso")
    
    usersList = takeUsersList()
    if(usersList == null){
        usersList = [];
    }

    saveUsersList()
    
    alertP.textContent = "";
    userInput.value = "";
    passInput.value = "";
})

window.addEventListener("DOMContentLoaded", function(){
    myMessages = takeOldChat()
    if(myMessages == null){
        myMessages = [];
    }
})


function checkUser(){
    if (usersList.length > 0) {
        for(let i = 0; i < usersList.length; i++){
            if(usersList[i].username == userInput.value){
                if (usersList[i].password === passInput.value) {
                    userAllowed = usersList[i].username;
                    userLastAccess = usersList[i].lastConnected;
                    usersList[i].lastConnected = new Date().getTime();
                    saveUsersList()
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

                
function userLastAccessCheck() {
    myMessages = takeOldChat();
    let othersEnter = true;
    
    console.log(userLastAccess);

        
        for(let i = 0; i < usersList.length; i++){
            if(usersList[i].username === userAllowed){
                for(let g=0; g < usersList.length; g++){
                    console.log(usersList[g].lastConnected);
                    if(usersList[g].lastConnected < userLastAccess){
                        othersEnter = false;
                        break;
                    }
                }
            }                  
        }
    
    
    
    if(othersEnter){
        myMessages.forEach(message => {
            // if (message.completeDate < userNewAccessTime) {
                message.seen = true;
                // }
            });
        }
        
    saveLocalchat();
}


function login(event){
    let username = userInput.value;
    let password = passInput.value;

    if (username != "" && password != ""){
        if (checkUser()) {
            localStorage.setItem("userConnesso", username);
            userLastAccessCheck();
        } else {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    } else {
        alertP.textContent = "Per favore inserisci i dati necessari";
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

formLogin.addEventListener("submit", login);


userInput.addEventListener("focus", function(){
        alertP.textContent = "";
})


passInput.addEventListener("focus", function(){
        alertP.textContent = "";
})