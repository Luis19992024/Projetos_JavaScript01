const ler = require('prompt-sync')({sigint: true});

let numero1 = ler("Digite um número: ");
let numero2 = ler("Digite outro número a ser multiplicado: ");

let resultado = numero1 * numero2;

console.log(" Resultado: " + resultado);

