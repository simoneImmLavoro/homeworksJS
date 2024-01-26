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

            deleteBtn.onclick = function () {
                listaToDo.removeChild(li)
            }


            importantBtn.onclick = function () {
                li.classList.toggle("important")
            }

            
            listaToDo.appendChild(li);
            li.appendChild(spanBtn);
            spanBtn.appendChild(importantBtn);
            spanBtn.appendChild(deleteBtn);
        }

        btn.onclick = aggiungi;
