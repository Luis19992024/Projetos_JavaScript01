const quaLitros = document.getElementById("idInNumero");
const opcao = document.getElementById("idSelect");
const resultado = document.getElementById("idOutResultado");
let valorAPagar;

function calcularValorPagar(quantidadeLitros, opcao){
if(opcao==="1"){
valorAPagar = quaLitros * 4.805;
return "Valor do álcool R$: " + valorAPagar;

}else 
if(opcao==="2"){
valorAPagar = quaLitros * 5.953;
return "Valor do diesel R$: " + valorAPagar;

}else 
if(opcao==="3"){

valorAPagar = quaLitros * 6.565;
return "Valor da gasolina R$: " + valorAPagar;

}
}
function eventoCalcular(){
let litros = Number(quaLitros.value);
let opcaoSelecionada = opcao.value;
let resultado = calcularValorPagar(litros, opcaoSelecionada);
resultado.innerText = resultado;
}