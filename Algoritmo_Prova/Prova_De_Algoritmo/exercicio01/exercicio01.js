const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const resultado = document.getElementById("inOutResultado");


function calcularPesoJupiter(peso, nome){
let resultado;    

 resultado = nome + " " + "  tem peso em júpiter no valor de " +(peso * 2.64)/9.87;

 return resultado;

}

function eventoCalcularPeso(){

let nomeDigitado = (nome.Value);
let pesoM = Number(peso.value);


let saida = nome.value + calcularPesoJupiter(pesoM, nomeDigitado);
resultado.innerText = saida;

}