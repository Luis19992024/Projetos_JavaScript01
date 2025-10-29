const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idResultado");
const botaoIncluir = document.getElementById("idIncluirBtn");
const botaoCalcular = document.getElementById("idCalcularBtn");

const numeroDigitados = [];

 function incluirNumero(valorNumero){
    valorNumero = Number(numero.value);
    numeroDigitados.push(valorNumero);
    console.log(numeroDigitados);
    resultado.innerText = numeroDigitados.join(" | ");
 }
 
 function calcularAmplitude(){
let numeroMaior = Math.max(...numeroDigitados);
let numeroMenor = Math.min(...numeroDigitados);
let amplitude = numeroMaior - numeroMenor;
 return amplitude;

 }
function calcularMediaAritmetica(){
    let soma = numeroDigitados.reduce((numeroSomado, numeroAtual) => numeroSomado + numeroAtual, 0);
    return soma / numeroDigitados.length;
}

function calcularBtn(){
    let amplitudeN = calcularAmplitude();
    let saida = " ";
    saida += " Números digitados: " + numeroDigitados.join(" | ") + "\n";
    saida += " A média é : " + calcularMediaAritmetica().toFixed(2) + "\n";
    saida+=  " A amplitude é : " + amplitudeN +"\n";
    saida+=  " Número invertido é: " + numeroDigitados.reverse().join(" | ");

    resultado.innerText = saida;
    
}