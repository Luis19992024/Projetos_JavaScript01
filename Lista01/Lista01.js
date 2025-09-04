const consumoMedio = 12.5;
const precoLitro = 6.44;
const tempoDeViagem = 4;
const velocidade = 100;

let distancia = tempoDeViagem * velocidade;
let quantidadeLitros= distancia/consumoMedio;
let custo = quantidadeLitros * precoLitro;

console.log("Custo da Viagem R$ " + custo);