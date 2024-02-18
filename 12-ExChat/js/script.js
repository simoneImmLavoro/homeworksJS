let textInput = document.querySelector("#messaggio");
let contatore = document.querySelector("#contatore");
let btnInvia = document.querySelector("#btnInvia");
let demo = document.querySelector("#demo");
let alarm = document.querySelector("#alarm");
let btnLogout = document.querySelector(".buttonLogout");
let myName = document.querySelector("#myName");

myName.textContent = takeUser()

let myMessages = []

function Messaggio(id, text, time, seen){
    this.id = id;
    this.text = text;
    this.time = time;
    this.seen = seen;
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

function saveLocalchat(){
    let myMessagesJSON = JSON.stringify(myMessages);
    localStorage.setItem("myChat", myMessagesJSON)
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
    let newMessage = new Messaggio(myId, myText, myHour(), false);
    myMessages.push(newMessage);
}


function printMessage(){
    demo.innerHTML = "";

    myMessages.forEach(message =>{
        let myName = document.createElement("h5");
        let myText = document.createElement("p");
        let myTime = document.createElement("p");
        let myMessageBox = document.createElement("div");
        let myNote = document.createElement("div");
        let myCheck = document.createElement("div");
        myMessageBox.classList.add("message-box")
        myNote.classList.add("my-note")
        myTime.classList.add("my-time")
        
        
        myName.textContent = message.id;
        myText.textContent = message.text;
        myTime.textContent = message.time;
        
        if(message.id == takeUser()){
            myMessageBox.classList.add("session-owner")
            if(message.seen == true){
                myCheck.classList.add("my-check")
                myCheck.innerHTML = myCheckIcon;
            }
        }
        
        demo.appendChild(myMessageBox)
        myMessageBox.appendChild(myName);
        myMessageBox.appendChild(myText);
        myMessageBox.appendChild(myNote);
        myNote.appendChild(myTime);
        myNote.appendChild(myCheck);
    })

    demo.scrollTo(0, demo.scrollHeight);
    alarm.textContent = "Messaggio inviato correttamente"
    textInput.value = "";
    charIn()
}


btnLogout.addEventListener("click", function(){
    localStorage.removeItem("userConnesso")
})


let myCheckIcon = `<svg width="100%" height="100%" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.11332 10C3.02891 10.0001 2.9453 9.97474 2.86732 9.92524C2.78933 9.87574 2.7185 9.80313 2.6589 9.71157L0.190847 5.9317C0.130608 5.84049 0.0827365 5.73195 0.0499845 5.61231C0.0172325 5.49267 0.00024631 5.36429 2.65895e-06 5.23456C-0.000240992 5.10483 0.0162628 4.97631 0.0485648 4.85638C0.0808669 4.73646 0.12833 4.62749 0.188225 4.53576C0.248119 4.44402 0.319264 4.37132 0.397568 4.32185C0.475871 4.27237 0.559789 4.24709 0.644495 4.24745C0.729201 4.24782 0.813024 4.27383 0.891143 4.32398C0.969263 4.37414 1.04014 4.44745 1.09969 4.5397L3.11332 7.6236L7.90383 0.286831C8.02445 0.102878 8.18779 -0.000277981 8.35801 5.62634e-07C8.52823 0.000279107 8.69142 0.103969 8.81178 0.288317C8.93214 0.472664 8.99983 0.722611 9 0.983307C9.00017 1.244 8.9328 1.49415 8.81268 1.67887L3.56775 9.71165C3.50814 9.80319 3.43731 9.87579 3.35933 9.92528C3.28134 9.97476 3.19774 10.0002 3.11332 10V10Z" fill="#6563FF"/>
<path d="M7.12782 10C7.04341 10.0001 6.9598 9.97474 6.88182 9.92524C6.94142 10.0168 6.80383 9.87574 6.88182 9.92524L5.20535 8.9317C5.14511 8.84049 5.0474 8.61964 5.01465 8.5C4.9819 8.38036 5.01475 8.36429 5.0145 8.23456C5.01426 8.10483 5.03076 7.97631 5.06306 7.85638C5.09537 7.73646 5.14283 7.62749 5.20272 7.53576C5.26262 7.44402 5.33376 7.37133 5.41207 7.32185C5.49037 7.27237 5.57429 7.24709 5.65899 7.24745C5.7437 7.24782 5.82752 7.27383 5.90564 7.32398C5.98376 7.37414 6.82226 7.62382 6.88182 7.71607L7.12782 7.6236L11.9183 0.286831C12.0389 0.102878 12.2023 -0.000277981 12.3725 5.62634e-07C12.5427 0.000279107 12.7059 0.103969 12.8263 0.288317C12.9466 0.472664 13.0143 0.722611 13.0145 0.983307C13.0147 1.244 12.9473 1.49415 12.8272 1.67887L7.58225 9.71165C7.52264 9.80319 7.45181 9.87579 7.37383 9.92528C7.29584 9.97476 7.21224 10.0002 7.12782 10Z" fill="#6563FF"/>
</svg>`