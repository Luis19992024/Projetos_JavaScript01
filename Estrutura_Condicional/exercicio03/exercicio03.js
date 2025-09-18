
let numeroDigitado =3026;
 
let parte1 = Math.floor(numeroDigitado/100);
let parte2 = numeroDigitado % 100;

let soma = parte1 + parte2;

let resultado= soma * soma; 

if(resultado === numeroDigitado){
    console.log("Numero possue tal característica: " + numeroDigitado);
}else{
    console.log("Não possue a tal característica " + numeroDigitado);
}




