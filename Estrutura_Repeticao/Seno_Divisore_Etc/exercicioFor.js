const digiteNumero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function calcularDivisores(numero){

 let acumulador = [];
    for(let i = 1; i<=numero; i++ ){

        if(numero %i ===0) {
            acumulador.push(i);
        }
    }

    return " Os divisores do número " + numero + " são: " + acumulador.join(", ");
}

function eventoCalcularDivisores(){

let numero = Number(digiteNumero.value);
let saida = calcularDivisores(numero);
resultado.innerText= saida;

}