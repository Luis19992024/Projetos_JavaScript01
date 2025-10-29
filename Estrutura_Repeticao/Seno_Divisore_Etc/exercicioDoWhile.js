const digiteNumero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function calcularDivisores(numero){
    let contador = 1;
    let acumulador = [];
do{

if(numero %contador ===0) {
    acumulador.push(contador);
}

}while(contador <= numero){
    contador++;

}

return " Os divisores do " + numero + " São:" + contador.join(", ");  
}  



function eventoCalcularDivisores(){

let numero = Number(digiteNumero.value);
let saida = calcularDivisores(numero);
resultado.innerText= saida;

}