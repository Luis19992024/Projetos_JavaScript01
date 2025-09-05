const pi = 3.14;
const raio = 5;
const altura = 10;
let volume;
let area;
let str = " ";
const opcao = 1;

switch(opcao){

case 1:
volume = (pi * raio * raio * altura) / 3;

area = pi * raio * (Math.pow(raio,2) + Math.pow(altura,2) + Math.pow(altura,2));

str = "Opção:"+opcao+" escolhida! O volume do cilindro é: "+ volume+" e a Área é: "+ area;

break;



}
console.log(str);




