const valor1 = document.getElementById("idValor1");
const valor2 = document.getElementById("idValor2");
const resultado = document.getElementById("idOutResultado");

function calcularRestoQuociente(a, b){
let resto = a;
let quo = 0;

while(resto>=b){
    
    resto = resto -b;
    quo = quo + 1; 
    
}
return "O resto das divisões subtraídas é: \n" + resto + " e quociente das divisões subtraídas é: \n" + quo;

}

function calcularBtn(){
let n1 = Number(valor1.value);
let n2 = Number(valor2.value);

resultado.innerText = calcularRestoQuociente(n1, n2);


}