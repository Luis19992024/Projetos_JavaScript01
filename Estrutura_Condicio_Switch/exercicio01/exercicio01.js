const valor = document.getElementById("idInValor");
const tipoMoeda = document.getElementById("idInTipo");
const resultado = document.getElementById("idOutSaida");



function ConverterValor(tipoMoeda1,valor, valorConvertido){
switch(tipoMoeda1){
    case 1:
        
      return  valorConvertido = "EURO " + valor * 6.617;
    

    case 2: 
        
      return  valorConvertido = "LIBRA LISTERLINA " +valor * 6.816;
        
       
    case 3:
        
       return valorConvertido = "DÓLAR " + valor * 5.071;
    

    case 4: 
    
       return valorConvertido = "IENE " +valor * 3.018;
    

    default:
        return " Opção escolhida inválida!";

}
}

function eventoConverterValor(){

let saidaFinal= ConverterValor(tipoMoedaResultado,valorResultado, valorConvertido);

let tipoMoedaResultado = Number(tipoMoeda.value);
let valorResultado = Number(valor.value);
let saidaResultado = Number(resultado.value);

 resultado.innerText = saidaFinal;

}

