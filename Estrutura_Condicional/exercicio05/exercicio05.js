// Calcular as Raízes 
const valorA = document.getElementById("idInA");
const valorB = document.getElementById("idInB");
const valorC = document.getElementById("idInC");
const saida = document.getElementById("idResultado");
const saida1 = document.getElementById("idResultado1");


function calcularDelta(a,b,c){

const delta = b*b - 4*a*c; 

return "Esse é o valor de Delta: " + delta;

}

function verificarRaizes(a, deltaCalculado){}

if(a===0){
console.log("Essa equação não é do segundo grau!");
}
if(deltaCalculado<0){
console.log("Raízes Imaginárias, Delta menor que zero!");

}
if(deltaCalculado ===0){
    const raiz = -b/(2*a);
console.log("Raiz única de seguinte valor: ") + raiz;
}
if(delta>0){
console.log("Raízes distintas! Valor Raiz 1  ") + (-b + Math.sqrt(delta))/(2*a) + "e" + (-b - Math.sqrt(delta)/(2*a));

}

function eventoVerificar(){
let a1 = Number(valorA.value);
let b1 = Number(valorB.value);
let c1 = Number(valorC.value);

let resultado = calcularDelta(a1,b1,c1);
let resultado1 = verificarRaizes(a1 , resultado);

saida.innerText= resultado;
saida1.innerText = resultado1;

}
