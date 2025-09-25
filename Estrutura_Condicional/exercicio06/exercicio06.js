const nome = document.getElementById( "idInNome");
const numeroConta = document.getElementById("idInNumeroConta");
let saldoBancario1 = document.getElementById("idInSaldo");
const resultado = document.getElementById("idOutResultado");


function verificarTarifa(saldoBancario){
let str = " ";    
let saldoComTarifa;

if(saldoBancario<1000){
 saldoComTarifa = saldoBancario-25;

str= "O saldo com a tarifa é: "+ saldoComTarifa;

}else if(saldoBancario>1000.01 && saldoBancario <=2000){
saldoComTarifa =saldoBancario-20;

str= "O saldo com a tarifa é: " + saldoComTarifa;

}else if(saldoBancario>=2000.01 && saldoBancario<=3500){
    saldoComTarifa= saldoBancario-13;

str= "Saldo com a tarifa é: " + saldoComTarifa;
}else if(saldoBancario>3500){
str= "Tarifa Isenta!";

}
return str;
} 

function converterValor(){
let saldo = Number(saldoBancario1.value);
let nomeUsuario = String(nome.value);
let numeroContaUsuario = String(numeroConta.value);
let resultado = verificarTarifa(saldo); 
//resultado.innerText = resultado;

resultado.innerText = resultado + saldo + " Nome: " + nomeUsuario + " Número da Conta: " + numeroContaUsuario;
}