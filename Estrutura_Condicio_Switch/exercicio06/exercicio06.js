const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
const opcao = 4;
let resultadoMedia;
let str = " ";

console.log("Escolha o tipo de Média desejada: \n 1-aritmética,\n2-ponderada, \n3-harmônica, \n 4-quadrática");

switch(opcao){
    case 1:
    resultadoMedia = (nota1 + nota2 + nota3) / 3;

    str = "Opção:"+opcao+" escolhida! A média é: "+ resultadoMedia;
break;
    case 2:

    resultadoMedia = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4);

    str = "Opção:"+opcao+" escolhida! A média Ponderada é: "+ resultadoMedia;
break;
 
    case 3: 
    resultadoMedia = 3/(1/nota1 + 1/nota2 + 1/nota3);

    str = "Opção:"+opcao+" escolhida! A média Harmônica é: "+ resultadoMedia;
break;
    case 4:    
    resultadoMedia = Math.sqrt((nota1 * nota1 + nota2 * nota2 + nota3 * nota3) / 3);

    str = "Opção:"+opcao+" escolhida! A média Quadrática é: "+ resultadoMedia;
break;

}


console.log(str);