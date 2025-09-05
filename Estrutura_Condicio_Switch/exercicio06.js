const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
const opcao = 1;
let resultadoMedia;
let str = " ";

switch(opcao){
    case 1:
    resultadoMedia = (nota1 + nota2 + nota3) / 3;


    str = "Opção:"+opcao+" escolhida! A média é: "+ resultadoMedia;
}
console.log(str);