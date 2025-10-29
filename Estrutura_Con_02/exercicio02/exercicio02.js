const arCondicionado = 's';
const pinturaMetalica = 'n';
const vidroEletrico = 's';
const direcaoHidraulica = 's';

let valorInicialCarro = 30000;
let precoFinal;

if(arCondicionado === 's'){
    
precoFinal = valorInicialCarro + 1750;
}
if(vidroEletrico==='s'){
    precoFinal += 1200;
}
if(direcaoHidraulica==='s'){
precoFinal+= 2000;
}


console.log("O preço final do carro com os itens adicionados R$: " + precoFinal);