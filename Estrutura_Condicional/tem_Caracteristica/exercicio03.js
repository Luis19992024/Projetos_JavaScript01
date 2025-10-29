const numeroDigitado = document.getElementById("idInNumero");
const saida = document.getElementById("idOutResultado");


function verificarNumero(numeroDigitado){
 
let parte1 = Math.floor(numeroDigitado/100);
let parte2 = numeroDigitado % 100;

let soma = parte1 + parte2;

let resultado= soma * soma; 

 if(resultado === numeroDigitado){
  return "Numero possue tal característica: " + numeroDigitado;

}else{
  return "Não possue a tal característica " + numeroDigitado;
}
}

function  eventoVerificarNumero(){

let numeroDigitado1 = Number(numeroDigitado.value);
let saida2 = verificarNumero(numeroDigitado1);

saida.innerText = saida2; 
}


