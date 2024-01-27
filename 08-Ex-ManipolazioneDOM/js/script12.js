let ul = document.querySelector("#page ul");
let h2 = document.querySelector("h2")

let newLi = document.createElement("li");
let newLi2 = document.createElement("li");
let newSpan = document.createElement("span")

newLi.textContent = "Nutella";
newLi2.textContent = "Geffer";

ul.insertBefore(newLi, ul.firstChild)
ul.appendChild(newLi2)

let li = document.querySelectorAll("#page ul li");
let liCounter = li.length

li.forEach(elemento =>{
    elemento.classList.add("cool")
})

newSpan.textContent = liCounter;
h2.appendChild(newSpan)
