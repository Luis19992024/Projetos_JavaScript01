//Ponto A
const aX1 = 2;
const aY1 = -3;

const bX2 = 4;
const bY2 = 5;

let str = " ";
let str1 = " ";

let potencia = Math.pow(bX2-aX1, 2) + Math.pow(bY2 - aY1, 2); 

let raiz = Math.sqrt(potencia);


if(aX1>0 && aY1>0){
str = "Ponto A no primeiro Quadrante! Distância : " + Math.floor(raiz);
} 

if(aX1<0 && aY1<0){
    str = "Ponto A no terceiro Quadrante! Distância : " + Math.floor(raiz);
}
if(aX1<0 && aY1>0){
    str = "Ponto A no segundo Quadrante! Distância : " + Math.floor(raiz);
}
if(aX1>0 && aY1<0){
    str = "Ponto A no quarto Quadrante! Distância : " + Math.floor(raiz);
}
//Classificação dos Eixos

if(aX1 == 0 && aY1==0){
str1 = " Ponto A sobre ponto Central!";
}
if(aX1 !==0 && aY1 == 0){
str1 = " Ponto A sobre o Eixo X!";
}
if(aX1 == 0 && aY1 !== 0){
str1 = " Ponto A sobre o Eixo Y!";
}

console.log(str);
console.log(str1);
