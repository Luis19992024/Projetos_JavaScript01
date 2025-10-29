let valorComumConverter1 = document.getElementById("idInValorComumConverter");
let moedaSelecionada1 = document.getElementById("idOpcao");
const resultado = document.getElementById("idOutResultado");
let valorConvertido;
function converterMoeda(moedaEscolhida, valorComumConverter){
    

    switch(moedaEscolhida){
        case 'EU':
            valorConvertido = valorComumConverter / 5.418;
            return "Valor Convertido: " + valorConvertido;
        case 'LL':
            valorConvertido = valorComumConverter / 6.336;
            return "Valor Convertido: " + valorConvertido;
        case 'USA':
            valorConvertido = valorComumConverter / 5.189;
            return "Valor Convertido: " + valorConvertido;
        default:
            return "Selecione uma moeda para converter!";
    }
}

function converterValor(){
    let valorComumDigitado = Number(valorComumConverter1);
    let moedaSelecionada = moedaSelecionada1.value;
    let funcao = converterMoeda(valorComumDigitado, moedaSelecionada);
    resultado.innerText = funcao;
}