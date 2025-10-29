const valorA = document.getElementById("idInValorA");
const valorB = document.getElementById("idInValorB");
const valorC = document.getElementById("idInValorC");
const resultado = document.getElementById("idOutResultado");

function verificarTipoTriangulo(valA, valB, valC){

if(valA==valB && valB==valC){

return "O triângulo é equilátero!";

}else if(valA !== valC && valA==valB){

return "O triângulo é isósceles!";

}else if(valA !== valB && valB !== valC){

return "O triângulo é escaleno!";
}
}
function eventoVeririfcar(){
let numeroA = Number(valorA.value);
let numeroB = Number(valorB.value);
let numeroC = Number(valorC.value);   

let saida = verificarTipoTriangulo(numeroA,numeroB,numeroC);    


resultado.innerText = saida;

}