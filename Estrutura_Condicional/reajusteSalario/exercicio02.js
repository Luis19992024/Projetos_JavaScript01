const salario = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function reajustarSalario(valor){

if(valor<=1412){
    
let aumentoSalarial = valor * 1.5;

 return (" Salário reajustado em 50%, R$: " + aumentoSalarial);

} else if(valor > 1412){
    let aumentoSalarial = valor * 1.4;

return ( " Salário reajustado em 40%, R$: " + aumentoSalarial);
}
}

function eventoCalcularBtn(){

    let numero = Number(salario.value);
    let saida = reajustarSalario(numero);

    resultado.innerText = saida;





}