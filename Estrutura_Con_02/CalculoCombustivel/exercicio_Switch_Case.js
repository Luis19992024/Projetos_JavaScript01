const quantidadeCombustivel = 6;
const tipoCombustivel = 3;
let strCombustivel = " ";
let valorPago = 0;

switch(tipoCombustivel){

case 1: 
strCombustivel = "Álcool";
valorPago = quantidadeCombustivel * 4.805;
break;
case 2:
    strCombustivel = "Diesel";
    valorPago = quantidadeCombustivel * 5.953;
    break;
    case 3:
        strCombustivel = "Gasolina";
        valorPago = quantidadeCombustivel * 6.565;
        break;
        default:
            strCombustivel = "Tipo combustível errado";
            valorPago = 0;
}
    const saida = "Tipo do combustível: " + strCombustivel;
    const saida2 = "Valor a ser pago: R$" + valorPago;
    console.log(saida + "\n" + saida2);