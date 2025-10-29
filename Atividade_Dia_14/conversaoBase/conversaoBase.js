const numeroDigitado = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function converterBase(numero){
  let binario = " ";
  while(numero>0){
binario =(numero%2) + binario;
numero = Math.floor(numero/2);

  } 
  return binario;
}

function converterNumero(){

let numero = Number(numeroDigitado.value); 
let saida = converterBase(numero);

resultado.innerText = saida;
}