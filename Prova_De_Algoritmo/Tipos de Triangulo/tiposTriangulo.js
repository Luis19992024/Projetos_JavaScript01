const ladoA = document.getElementById("idInLadoA");
const ladoB = document.getElementById("idInLadoB");
const ladoC= document.getElementById("idInLadoC");
const resultado = document.getElementById("idOutResultado");
let saida = " "

function verificarFormaTriangulo(a, b, c){
if (a + b > c && a + c > b && b + c > a) {

return "Os lados formam um triângulo.";

 }

}

function classificarTriangulo(a, b, c){
let A = a*a;
let B = b*b;
let C = c*c;

if(a ===b + c){
    return "Triângulo Retângulo";
}else if(a > b + c){
    return "Triângulo Obtusângulo";
}else{
    return "Triângulo Acutângulo";
}
}

function verificarTriangulo(){
let valA = Number(ladoA.value);
let valB = Number(ladoB.value);
let valC = Number(ladoC.value);

 if (verificarFormaTriangulo(valA, valB, valC)) {
    resultado.innerText = classificarTriangulo(valA, valB, valC);
  } else {
    resultado.innerText = "Os lados não formam um triângulo.";
  }

}