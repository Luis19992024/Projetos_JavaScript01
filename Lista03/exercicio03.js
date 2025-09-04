const aluminioM2 = 155;
const pi = 3.14;
const alturaLata = 0.07;
const raio = 0.04; 

const areaBase = pi * Math.pow(raio, 2) *
2;

const areaDoLado = 2 * pi * raio * alturaLata;

let areaTotalLata = areaBase + areaDoLado;




let precoUnitario= aluminioM2/areaTotalLata;

console.log(" O Valor Unitário Da Lata é R$:  " + precoUnitario);

