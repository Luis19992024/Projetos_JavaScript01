const tipoMoeda =4;
let str = " ";
let valorConvertido;
let valor = 100;

switch(tipoMoeda){
    case 1:
        str = "Euro";
        valorConvertido = valor * 6.617;
        break;

    case 2: 
        str = "Libra Esterlina";
        valorConvertido = valor * 6.816;
        break;
       
    case 3:
        str = "Dólar";
        valorConvertido = valor * 5.071;
        break;

    case 4: 
        str = "Iene";
        valorConvertido = valor * 3.018;
        break;

    default:
        str = " Opção escolhida inválida!";

}
console.log("O valor convertido em " + str + " para Reais R$: " + valorConvertido);