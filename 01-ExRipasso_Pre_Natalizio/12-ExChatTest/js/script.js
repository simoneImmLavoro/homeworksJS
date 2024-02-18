let textInput = document.querySelector("#messaggio");
let contatore = document.querySelector("#contatore");
let btnInvia = document.querySelector("#btnInvia");
let demo = document.querySelector("#demo");
let alarm = document.querySelector("#alarm");
let btnLogout = document.querySelector(".buttonLogout");
let myName = document.querySelector("#myName");

myName.textContent = takeUser()

let myMessages = []

function Messaggio(id, text, time){
    this.id = id;
    this.text = text;
    this.time = time;
}

function takeUser(){
    let userName =  localStorage.getItem("userConnesso");
    return userName;
}

function takeOldChat(){
    let previousChatJSON =  localStorage.getItem("myChat");
    let previousChatOBJ = JSON.parse(previousChatJSON);
    return previousChatOBJ;
}

window.addEventListener("DOMContentLoaded", function(){
    myMessages = takeOldChat()
    if(myMessages == null){
        myMessages = [];
    } else {
        printMessage()
    }
})

function myHour(){
    let currentData = new Date();
    let hours = currentData.getHours();
    let mins = currentData.getMinutes();

    let oraFormatt = hours < 10 ? "0" + hours : hours;
    let minFormatt = mins < 10 ? "0" + mins : mins;

    let oraMin = oraFormatt + ":" + minFormatt;

    return oraMin
}


let myCharMax = 100;
let actualChar = 0;
let residueChar = 0;

contatore.textContent = myCharMax;

function charIn(){
    let myText = textInput.value;
    actualChar = myText.length
    residueChar = myCharMax - actualChar;
    contatore.textContent = residueChar;
}

textInput.addEventListener("focus", function(){
    if(alarm.textContent != "Hai superato il limite di caratteri"){
        alarm.textContent = "";
    }
})


textInput.addEventListener("input", function(event){
    
    charIn()

    if(residueChar < 0){
        btnInvia.setAttribute("disabled", "true");
        alarm.textContent = "Hai superato il limite di caratteri"
    } else {
        btnInvia.removeAttribute("disabled");
        alarm.textContent = ""
    }
})

btnInvia.addEventListener("click", function(){
    if(textInput.value == ""){
        alarm.textContent = "Non puoi inviare un messaggio vuoto"
    } else {
        collectMessage();
        saveLocalchat();
        printMessage();
    }
})

function collectMessage(){
    let myText = textInput.value;
    let myId = takeUser()
    let newMessage = new Messaggio(myId, myText, myHour());
    myMessages.push(newMessage);
}

function saveLocalchat(){
    let myMessagesJSON = JSON.stringify(myMessages);
    localStorage.setItem("myChat", myMessagesJSON)
}

function printMessage(){
    demo.innerHTML = "";

    myMessages.forEach(message =>{
        let myName = document.createElement("h5");
        let myText = document.createElement("p");
        let myTime = document.createElement("p");
        let myMessageBox = document.createElement("div");
        myMessageBox.classList.add("message-box")
        myTime.classList.add("my-time")
        
        if(message.id == takeUser()){
            myMessageBox.classList.add("session-owner")
        }
        
        myName.textContent = message.id;
        myText.textContent = message.text;
        myTime.textContent = message.time;
        
        
        demo.appendChild(myMessageBox)
        myMessageBox.appendChild(myName);
        myMessageBox.appendChild(myText);
        myMessageBox.appendChild(myTime);
    })

    demo.scrollTo(0, demo.scrollHeight);
    alarm.textContent = "Messaggio inviato correttamente"
    textInput.value = "";
    charIn()
}


btnLogout.addEventListener("click", function(){
    localStorage.removeItem("userConnesso")
})