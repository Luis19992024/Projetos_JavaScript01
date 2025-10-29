let pi = 0;
let sinal = 1;
let denominador = 1;
let termo = 4;

function calcularPiPrecisao(){
do{
termo = 4 / denominador;  
pi+= sinal * termo;
sinal *= -1;
denominador += 2;

}while(termo >= 0.0001){
return pi;
}

}


console.log("O valor de PI preciso é: " + calcularPiPrecisao().toFixed(4));