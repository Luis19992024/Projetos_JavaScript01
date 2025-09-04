//Aplicação Financeira

const i = 0.05;
const P = 800;
const n = 10;

 let calInicial = (Math.pow(1+i,n)-1)/i  

let calFinal = calInicial * P;

console.log("O valor acumulado é: " + calFinal); 