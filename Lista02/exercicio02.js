const salarioFixo = 1500;
const tvLcd = 50;
const tvLed = 60;
const tvPlasma = 55; 
const unidadeVendidads = 10;

let salariototal1 = salarioFixo + tvLcd * unidadeVendidads;
let salariototal2 = salarioFixo + tvLed * unidadeVendidads ;
let salariototal3 = salarioFixo + tvPlasma * unidadeVendidads;


console.log("Salario total das TVs LCD é:" + salariototal1);
console.log("Salario total das TVs LED é:" + salariototal2);
console.log("Salario total das TVs Plasma é:" + salariototal3);