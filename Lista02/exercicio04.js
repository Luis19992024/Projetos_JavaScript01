const valorDaPrestacao = 1000;
const i = 5;
const tempoAtraso = 2;

let valorAtualizado = valorDaPrestacao + (valorDaPrestacao * (i/100) * tempoAtraso);

console.log("Valor atualizado da prestação R$: " + valorAtualizado);