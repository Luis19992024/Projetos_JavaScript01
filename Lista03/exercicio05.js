//teste GitHub
let valorCarro = 20000;
let impostoPrecoFab = 0.12;
let impostoPrecoDist = 0.3; 

let precoFabricaCalculado = valorCarro * impostoPrecoFab;

let precoDistCalculado = valorCarro * impostoPrecoDist;

let ValorFinalConsumidor = precoDistCalculado + precoFabricaCalculado + valorCarro;

console.log(" Valor final do carro ao consumidor final R$: " + ValorFinalConsumidor);