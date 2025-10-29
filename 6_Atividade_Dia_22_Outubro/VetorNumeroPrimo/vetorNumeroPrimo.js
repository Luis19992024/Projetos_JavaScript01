const resultado = document.getElementById("idOutResultado");

let vetor = [];
function gerarNumeros() {
    vetor = []; 
    for (let i = 0; i < 10; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }
    return vetor.join(" - ");
}

function gerarNumero() {

    resultado.innerText =  "NÚMEROS ALEATÓRIOS CONJUNTO A: " + gerarNumeros();
}

function verificarNumerosPrimos() {

    let primos = [];

    for (let i = 0; i < vetor.length; i++) {
        let num = vetor[i];
        let divisores = 0;

        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                divisores++;
            }
        }

        if (divisores === 2) {
            primos.push(num);
        }
    }

    if (primos.length === 0) {
        resultado.innerText = "Não há número primo.";
    } else {
        resultado.innerText = "Números primos encontrados: " + primos.join(" ");
    }
}

 function verificarNumero(){
 verificarNumerosPrimos();

 }

    





