const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function calcularFibonacci(numero){
let a = 1; let b = 1; let termo = 0;

if(numero<=0){
    return "Digite um número inteiro positivo";
}else{

for(let i = 3; i<=numero; i++){
termo = a + b;    
a = b;
b = termo;

}
return "O " + numero+" °" +  "  termo é: " + termo;

}

}

 function calcularBtn(){
    let numeroDigitado = Number(numero.value);
    let saida = calcularFibonacci(numeroDigitado);
    resultado.innerText = saida;

}