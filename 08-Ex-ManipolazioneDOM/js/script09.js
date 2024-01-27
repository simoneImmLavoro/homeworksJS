let box = document.querySelector("#box");
let newH1 = document.createElement("h1");


function sizeCatch(){
    let windowW = window.innerWidth;
    let windowH = window.innerHeight;
    newH1.innerHTML = `La tua finestra è <br> ${windowW}px x ${windowH}px`
    box.appendChild(newH1)
}


window.addEventListener('resize', function(){
    sizeCatch()
})


sizeCatch()