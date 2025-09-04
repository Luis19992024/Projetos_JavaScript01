const numeroDigitado = 20;

if(numeroDigitado<0){
    console.log("O número deve ser maior que Zero!");
}
const raiz = Math.sqrt(numeroDigitado);

if(Number.isInteger(raiz)){
    console.log(raiz +" "+ "É um quadrado perfeito!");
}else{
    console.log("Não é um quadrado perfeito!");
}

