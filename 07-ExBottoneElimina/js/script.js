let itemInput = document.querySelector("#item");
let btn = document.querySelector("#btn");
let listaToDo = document.querySelector("#listaToDo");

function aggiungi() {
    let item = itemInput.value
    let li = document.createElement("li");
    let spanBtn = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let importantBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.innerText = "X"
    importantBtn.innerText = "!"

    li.onclick = function () {
        this.classList.toggle("barrato");
    }
    
    listaToDo.appendChild(li);
    li.appendChild(spanBtn);
    spanBtn.appendChild(importantBtn);
    spanBtn.appendChild(deleteBtn);
    itemInput.value = ""

    importantBtn.onclick = function () {
        li.classList.toggle("important")
        
        if (li.classList.contains("important")) {
            spanBtn.removeChild(deleteBtn);
        } else {
            spanBtn.appendChild(deleteBtn);
        }
    }

    deleteBtn.onclick = function () {
    spanBtn.appendChild(deleteBtn)
        listaToDo.removeChild(li)
    }
    
}

btn.onclick = aggiungi;
