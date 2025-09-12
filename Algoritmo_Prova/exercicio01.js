const salario = 1518; 
const quiloWatt = 2;

let valorQuiloWatt = 1518/4; //Cada quiloWatt custa R$ 379.50

let consumoValor = (quiloWatt * valorQuiloWatt);
let desconto = (consumoValor * 25/100);
let valorTotal = consumoValor-desconto;

console.log("Valor de cada quiloWatt R$:" + valorQuiloWatt +" Valor em reais do consumo R$: " + consumoValor);
console.log("Desconto 25% R$: " + valorTotal);