let userContainer = document.querySelector("#user-container");
let logoutBtn = document.querySelector("#logOut")

const ENDPOINT = "http://localhost:3000/users"
let myUsers = [];


fetch(ENDPOINT)
    .then(data =>{
        return data.json();
    })
    .then(response => {
        myUsers = response;

        if(myUsers.length > 0){
            myUsers.forEach(user =>{
                createUsersElement(user)
            })
        }
    })

function createUsersElement(user){
    let parentDiv = document.createElement("div");
    let firstDiv = document.createElement("div");
    let firstTitle = document.createElement("h2");
    let accBtn = document.createElement("button");
    let secondDiv = document.createElement("div");
    let childDiv = document.createElement("div");

    let nomeP = document.createElement("p")
    let cognomeP = document.createElement("p")
    let usernameP = document.createElement("p")
    let emailP = document.createElement("p")
    let telP = document.createElement("p")

    parentDiv.setAttribute("class", "accordion");
    parentDiv.setAttribute("id", "accordionMy");
    firstDiv.setAttribute("class", "accordion-item");
    firstTitle.setAttribute("class","accordion-header");

    accBtn.setAttribute("class", "accordion-button");
    accBtn.setAttribute("type", "button");
    accBtn.setAttribute("data-bs-toggle", "collapse");
    accBtn.setAttribute("data-bs-target", "#collapseOne" + user.id);

    secondDiv.setAttribute("id", "collapseOne" + user.id);
    secondDiv.setAttribute("class", "accordion-collapse collapse");
    secondDiv.setAttribute("data-bs-parent", "#accordionExample");

    childDiv.setAttribute("class", "accordion-body");

    accBtn.textContent = user.nome + " " + user.cognome;
    nomeP.textContent = "Nome: " + user.nome    
    cognomeP.textContent = "Cognome: " + user.cognome    
    usernameP.textContent = "Username: " + user.username    
    emailP.textContent = "Email: " + user.email    
    telP.textContent = "Telefono: " + user.tel    

    parentDiv.appendChild(firstDiv)
    firstDiv.appendChild(firstTitle)
    firstTitle.appendChild(accBtn)
    firstDiv.appendChild(secondDiv)
    secondDiv.appendChild(childDiv)
    childDiv.appendChild(nomeP)
    childDiv.appendChild(cognomeP)
    childDiv.appendChild(usernameP)
    childDiv.appendChild(emailP)
    childDiv.appendChild(telP)

    userContainer.appendChild(parentDiv)
}

logoutBtn.addEventListener("click", function(){
    window.location.href = "./login.html";
})