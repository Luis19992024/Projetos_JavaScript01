const euro = '1';
const libraEsterlina = '2';
const dolar = '3';

let valorComumConverter = 500;
let valorConvertido;


console.log("Qual moeda para a conversão? 1-Euro, 2-libra Esterlina, 3-Dólar");

if(euro ==='1'){  
valorConvertido = valorComumConverter / 5.418;
console.log("Euro para Reais: " + valorConvertido);

}else if(libraEsterlina ==='2'){
valorConvertido = valorComumConverter / 6.336;
console.log("Libra Listerlina para Reais: " + valorConvertido);

}else if(dolar ==='3'){
    valorConvertido = valorComumConverter / 5.189;
    console.log("Dólar para Reais: " + valorConvertido);
}    

