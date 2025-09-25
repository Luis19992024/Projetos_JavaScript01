const tipoCombustivel = 6;
let quantidadeCombustivel = 10;
let str = " ";
let valorPagar;

switch(tipoCombustivel){
case 1:
str = "Álcool ";
valorPagar = quantidadeCombustivel * 4.805;
break;

case 2:
str = "Diesel ";
valorPagar = quantidadeCombustivel * 5.953; 
break; 

case 3:
str = "Gasolina ";
valorPagar = quantidadeCombustivel * 6.565; 
break;

default:
str = ": Opção Inválida! ";   
valorPagar = 0; 

}
console.log("Tipo de combustível " + str + "no valor de R$:" + valorPagar + ", por:" + quantidadeCombustivel + " Litros");