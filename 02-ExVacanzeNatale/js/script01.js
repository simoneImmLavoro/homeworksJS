let areaSpan = document.querySelector("#area");
let perimetroSpan = document.querySelector("#perimetro");

let latoA = 5;
let latoB = 6;
let latoC = 7;

let perimetro= latoA + latoB + latoC;

let semiPerimetro = perimetro/2;

let area = Math.sqrt(semiPerimetro*(semiPerimetro-latoA)*(semiPerimetro-latoB)*(semiPerimetro-latoC))

perimetroSpan.innerHTML = perimetro;
areaSpan.innerHTML = area;