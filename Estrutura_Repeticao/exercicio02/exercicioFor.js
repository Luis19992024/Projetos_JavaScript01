const valorDigitado = document.getElementById("idInNumero");
const resultado = document.getElementById("idOutResultado");

function calcularValoresSeno(valorA){
let senoResultado;
for(let i=1; i<=4; i++){
     senoResultado = valorA - (Math.pow(valorA, 3)/6) + (Math.pow(valorA, 5)/120) - (Math.pow(valorA, 7)/5040);
    return senoResultado;
}

if(senoResultado>=0.0 && senoResultado<=3.0){
return "O valor de Seno está dentro da variação exigida(0.0 a 3.0! ";
}else {
    return "O valor de Seno está fora da variação exigida(0.0 a 3.0! ";
}
}
function eventoCalcularSena(){
let valorA = Number(valorDigitado.value);
let senoResultado = calcularValoresSeno(valorA);
resultado.innerText = senoResultado;
}