const numeroDigitado = document.getElementById("idInNumero");
const outResultado = document.getElementById("idOutResultado");

function verificarNumber(numeroDigitado){
    if(numeroDigitado < 0){
        return "O número deve ser maior que Zero!";
    }
    const raiz = Math.sqrt(numeroDigitado);
    if(Number.isInteger(raiz)){
        return " é um quadrado perfeito!";
    } else {
        return "não é um quadrado perfeito!";
    }
}

function verificarNumero() {
    let numeroDigitado1 = verificarNumber(numeroDigitado.value);    
    let saida = "Número digitado  " + numeroDigitado1;
    outResultado.innerText = saida;
}