const numeroIdentificação = document.getElementById("idInIdentificacao");
const numeroFrequencia = document.getElementById("idInFrequencia");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota1");
const resultado = document.getElementById("idOutResultado");
let freq1;
let str = " ";
let str2 = " ";
let str3 = " ";

function calcularFrequencia(numF){
return numF/100;


}

function calcularMediaExercicio(notaA, notaB, notaC){
let resultado = (notaA + notaB + notaC)/3;
str = " A média dos exercícios é: " + resultado;
return str;

}

let resultadoFuncao = calcularMediaExercicio(nota1, nota2, nota3);


 let mediaFinal = (nota1 + nota2 * 2 + nota3*3 + resultadoFuncao)/7;


 if(mediaFinal>=9.1 && mediaFinal <=10){
    str2 = "CONCEITO A";
 }else if(mediaFinal>=7.6 && mediaFinal<=9){
    str2 = "CONCEITO B";
 }else if(mediaFinal<=6.1 && mediaFinal<=7.5){
    str2 = "Conceito C";
 }else if(mediaFinal>=4.1 && mediaFinal<=6){
    str2 = "CONCEITO D";
 }else if(mediaFinal<4){
    str2 = "CONCEITO E";
 }

 //Classificação 
 

 let numId = Number(numeroIdentificação.value);
 let numFre = Number(numeroFrequencia.value);
 let nota01 = Number(nota1.value);
 let nota02 = Number(nota2.value);
 let nota03 = Number(nota3.value);

 if(mediaFinal>=6.1 && mediaFinal<=10){

 freq1 = calcularFrequencia(numFre.value);

if(numFre>freq1){
    str3 = "ALUNO CLASSIFICADO EM A, B OU C, frequência superior a 75%";
}
 }
 if(mediaFinal>=4 && mediaFinal<6){
     freq1 = calcularFrequencia(numFre.value);
if(numFre>freq1){
    str3 = "ALUNO CLASSIFICADO EM D ou E, frequência inferior a 75%";
 }
}

 function eventoBtn(){
let saida = " "
 saida+= "O número do Aluno é: " + numId + "\n";
 saida+= " A frequência do aluno é: " + freq1 + "n";
 saida+= " Valor nota 1: " + nota01 + "\n";
 saida+= " Valor nota 2: " + nota02 + "\n";
 saida+= " Valor nota 3: " + nota03 + "n";
 saida+= " A média dos exercícios é: " + resultadoFuncao + "\n";
 saida += " A média final do aluno é: " + mediaFinal + "\n";
 saida += str2 + "\n";
 saida += str3 + "\n";

 resultado.innerText = saida;
 }
