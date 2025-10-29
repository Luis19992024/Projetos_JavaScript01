const numero1 = document.getElementById("idInNumero1");
const numero2 = document.getElementById("idInNumero2");
const saida = document.getElementById("idSaida"); 
let resultado = " ";


function calcularMultiplicacao(n1, n2){
let resultado = n1;
 for(let i = 1; i<n2; i++){
    resultado += n1;
    
 }  return "O resultado da multiplicação é: " + resultado;

}

function calcular(){

let valorA = Number(numero1.value);
let valorB = Number(numero2.value);

resultado = calcularMultiplicacao(valorA, valorB);

saida.innerText = resultado;



}