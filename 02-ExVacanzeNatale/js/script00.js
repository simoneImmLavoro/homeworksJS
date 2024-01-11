let labelName = document.querySelector("#userName");
let submit = document.querySelector("#submit");
let myPage = document.querySelector("body");


submit.addEventListener("click", function() {
    let userName = labelName.value;
    let h1El = document.createElement("h1");
    h1El.innerHTML=(`Ciao ${userName}, felice di averti qui!`);
    myPage.appendChild(h1El);
})


