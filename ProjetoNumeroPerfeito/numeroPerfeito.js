const entrada = document.getElementById("idInEntrada");
const saida = document.getElementById("idOutSaida");
const botao = document.getElementById("idInBtn");


function verificarNumeroPerfeito(numero) {
let somaDivisores = 0;

for(let divisor =1; divisor<= numero/2; divisor++){
if(numero % divisor === 0){
somaDivisores += divisor;
}

}
return  somaDivisores === numero;
}

function verificarNumero(){

const numero = Number(entrada.value);

let resultado = " O Número Verificado ...\n";
if(verificarNumeroPerfeito(numero)===true)
resultado += numero + " é um número perfeito\n";
else
resultado += numero + " não é um número perfeito\n";  

saida.innerText = resultado;

}
