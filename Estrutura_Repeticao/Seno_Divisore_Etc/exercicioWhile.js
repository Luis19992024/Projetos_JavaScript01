const digiteNumero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function calcularDivisores(numero){
let contador = 1;   
while(contador <= numero){

    if(numero %contador ===0) {
        contador.push(contador);
    }
    contador++;
}
return " Os divisores do " + numero + " São:" + contador.join(", ");
}

function eventoCalcularDivisores(){

let numero = Number(digiteNumero.value);
let saida = calcularDivisores(numero);
resultado.innerText= saida;

}