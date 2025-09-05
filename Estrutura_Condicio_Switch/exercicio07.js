const pi = 3.14;
const raio = 5;
const altura = 10;
let volume;
let area;
let str = " ";
const opcao = 3;

switch(opcao){

case 1:
volume = (pi * raio * raio * altura) / 3;

area = pi * raio * (Math.pow(raio,2) + Math.pow(altura,2) + Math.pow(altura,2));

str = "Opção:"+opcao+" escolhida! O volume do Cone Reto é: "+ volume+" e a Área é: "+ area;

break;
case 2: 

volume = (pi *raio * raio * altura) / 3;

area = 2 * pi * raio * altura;

str = "Opção:"+opcao+" escolhida! O volume do Cilindro é: "+ volume+" e a Área é: "+ area;
break;

case 3:
volume = (4/3) * pi * Math.pow(raio,3);

area = 4 * pi * Math.pow(raio,2);

str = "Opção:"+opcao+" escolhida! O volume da Esfera é: "+ volume+" e a Área é: "+ area;
break;
}
console.log(str);




