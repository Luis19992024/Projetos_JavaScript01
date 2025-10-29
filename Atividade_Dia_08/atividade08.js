const numero = document.getElementById("idInNumero");
const opcoes = document.getElementById("idOpcoes");
const saidaDados = document.getElementById("idSaida");
const btnCalcular = document.getElementById("idBtn");

//Variável Genérica 
let saida = " ";
let resultado = " ";

//Verificar se um número é primo 

function verificarNumeroPrimo(numero){
let divisor = 0;
if(numero<=2){
    return  numero + " não é primo";
}else{
for(let i = 1; i<=numero; i++){

    if(numero % i ===0){
        divisor++;
    }
}
if(divisor ===2){
    return numero + " é número primo";
}else{
    return numero + " não é número primo";
}

}

}


//Verificar se o número tem a característica
function calcularNumeroCaracteristica(numero){
let saida = " ";
numero = 1000;
while(numero <=9999){


    aux1 = Math.trunc(numero /100);
    aux2 = numero % 100;
    aux3 = aux1 + aux2;
    aux4 = aux3 * aux3;
    if(aux4===numero )saida += (numero+ " "); 
    numero++;
}

return saida;

}
//Verificar se o número é triangular

function verificarTriangular(numero) {
let soma = 0;
let i = 1;
while(soma<numero){
soma += i;
i++;
}
if(soma===numero){
    return numero + " é um número triangular";
}else{
    return numero + " não é um número triangular";
}

}


//CalcularFatorial 

function calcularFatorial(numero){
fatorial = 1;

while(numero >=1){
fatorial *= numero;
numero--;

}
return fatorial;
}

//Verificar Número Perfeito
function verificarNumeroPerfeito(numero) {
let somaDivisores = 0;

for(let divisor =1; divisor<= numero/2; divisor++){
if(numero % divisor === 0){
somaDivisores += divisor;
}

}
if(somaDivisores ===numero){
    return numero + " é um número perfeito";
}else{
    return numero + " não é um número perfeito";
}
}

//Função do botão
function verificarCalcular(){
    let entradaNumero = Number(numero.value);
    let opcaoSelecionada = opcoes.value;
    
switch (opcaoSelecionada) {
        case "primo":
             resultado = verificarNumeroPrimo(entradaNumero); break;

        case "numeroPerfeito": 
             resultado = verificarNumeroPerfeito(entradaNumero);
            
             break;

        case "fatorial": 
             resultado = calcularFatorial(entradaNumero);
              break;

        case "numeroTriangular":
             resultado = verificarTriangular(entradaNumero);
          break;
        
        case "possueCaracteristica": 
             resultado = calcularNumeroCaracteristica(entradaNumero);
         break;

        default:
             resultado = "Escolha uma opção válida.";
      }
      saidaDados.innerText = resultado;
    }
      
    