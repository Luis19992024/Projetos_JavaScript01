const quaLitros = 100;
const opcao = '3';
let valorAPagar;

console.log("Escolha o tipo de combustível: 1-Álcool, 2-Diesel, 3-Gasolina");
console.log(" ");

if(opcao==='1'){
valorAPagar = quaLitros * 4.805;
console.log("Valor do álcool R$: " + valorAPagar);

}else 
if(opcao==='2'){
valorAPagar = quaLitros * 5.953;
console.log("Valor do diesel R$: " + valorAPagar);

}else 
if(opcao==='3'){

valorAPagar = quaLitros * 6.565;
console.log("Valor da gasolina R$: " + valorAPagar);

}
