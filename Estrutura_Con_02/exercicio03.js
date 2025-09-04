const valorA = 4;
const valorB = 4;
const valorC = 4;

if(valorA==valorB && valorB==valorC){

console.log("O triângulo é equilátero!")

}else if(valorA !== valorC && valorA==valorB){

    console.log("O triângulo é isósceles!")

}else if(valorA !== valorB && valorB !== valorC){
    console.log("O triângulo é escaleno!")
}