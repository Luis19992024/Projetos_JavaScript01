const base = document.getElementById("idInBase");
const expoente = document.getElementById("idInExpoente");
const saida = document.getElementById("idOutresultado"); 
let resultado = " ";


function calcularMultiplicacao(n1, n2){
let resultado = 1;
 for(let i = 0; i<n2; i++){
   resultado = resultado*n1;
   

 }  return resultado;

}

function calcularPotencia(){

let valorA = Number(base.value);
let valorB = Number(expoente.value);

resultado = calcularMultiplicacao(valorA, valorB);

saida.innerText = resultado;



}