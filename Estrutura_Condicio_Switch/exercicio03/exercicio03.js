const valorA = 10;
const valorB = 2;
let operacao = "/";
let resultado;
let str = " ";

switch(operacao){
case "+": 
resultado = valorA + valorB;
str = " Soma: ";
break;

case "-":
resultado = valorA - valorB;
str = " Subtração: ";
break;

case '*' :
resultado = valorA * valorB;
str = " Multiplicação: "; 
break;

case '/':
resultado = valorA / valorB;
str = " Divisão: ";   
break;

default: 
str = "Operação inválida!";

}
console.log(str +" "+ resultado);