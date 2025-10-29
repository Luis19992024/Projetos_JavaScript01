const valorRaiz = document.getElementById("idInValor");
const resultado = document.getElementById("idOutResultado");

function calcularRaiz(numero){
let raiz = 0; 
let impar = 1;   

while(numero>=impar){

    numero-= impar;
    raiz++;
    impar+= 2;
}
return raiz;
}

function calcularRaizBtn(){
let n = Number(valorRaiz.value);
resultado.innerText = calcularRaiz(n);

}