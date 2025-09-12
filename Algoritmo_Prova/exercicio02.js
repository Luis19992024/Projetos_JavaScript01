const precoProduto = 1000;
let precoReajustado;
let str1 = " ";
let str = " ";

if(precoProduto<=50){
let calculo = precoProduto * 6/100;
precoReajustado = precoProduto + calculo;

str = "Produto reajustado em 6%." + " Valor Antigo R$: " + precoProduto + " Valor Reajustado: " + precoReajustado;
}
if(precoProduto>50 && precoProduto<=100){
let calculo = precoProduto * 15/100;
precoReajustado = precoProduto + calculo;

str = "Produto reajustado em 15%." + " Valor Antigo R$: " + precoProduto + " Valor Reajustado: " + precoReajustado;
}
if(precoProduto>100){
let calculo = precoProduto * 20/100;
precoReajustado = precoProduto + calculo;

str = "Produto reajustado em 20%." + " Valor Antigo R$: " + precoProduto + " Valor Reajustado: " + precoReajustado;
}
//Classificação 
if(precoReajustado<=90){
    str1 = " Barato!";
}
if(precoReajustado>90 && precoReajustado<=220){
    str1 = " Normal!";
}
if(precoReajustado>220 && precoReajustado<=300){
    str1 = " Caro!";
}
if(precoReajustado>300){
    str1 = " Muito Caro!";
}

console.log(str);
console.log(" Classificação: " +str1)