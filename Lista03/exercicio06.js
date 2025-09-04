
const numero = 123;
const centenas = Math.floor(numero/100);
const dezenas = Math.floor((numero % 100)/10)
const unidades = numero % 10;

const invertido = unidades * 100 + dezenas * 10 + centenas;


console.log("Numero Invertido " + invertido+"");


