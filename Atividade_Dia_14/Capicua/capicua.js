const numeroDigitado = document.getElementById("idInNumero" );
const resultado = document.getElementById("idOutResultado");

function verificarCapicua(numero){
let inverso = 0;
let numeroOriginal = numero;

while(numeroOriginal>0){
inverso = inverso * 10 + (numeroOriginal%10);
numeroOriginal = Math.floor(numeroOriginal/10);
}

if(numero ===inverso){
return `O número ${numero} é capícua! numero invertido: ${inverso}`;

return saida;
}else{
  return `O número ${numero} não é capícua! numero invertido: ${inverso}`; 
    }
}


function calcularCapicua(){
let numero1 = Number(numeroDigitado.value);
let saida1 = verificarCapicua(numero1);
resultado.innerText = saida1;

}