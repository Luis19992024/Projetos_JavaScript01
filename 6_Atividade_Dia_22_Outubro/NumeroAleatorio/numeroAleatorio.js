const numeroDigitado = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");


let vetor = [];

function gerarNumeros() {
    vetor = []; 
    for (let i = 0; i < 15; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }
    return vetor.join(" - ");
}

function exibirNumeros() {
    let saida = " ";
    saida += "NÚMEROS ALEATÓRIOS GERADOS: " + gerarNumeros();
    resultado.innerText = saida;
}
function verificarNumero(){
    let saida = " ";

if(vetor.includes(Number(numeroDigitado.value))){

saida = "O numero digitado existe no vetor: " + numeroDigitado.value;
resultado.innerText = saida;
}else{
    saida = "O numero digitado não existe no vetor: " + numeroDigitado.value;
    resultado.innerText = saida;
}

}








