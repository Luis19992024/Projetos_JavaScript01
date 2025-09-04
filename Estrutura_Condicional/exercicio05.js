// Calcular as Raízes 
const a = 5;
const b = 5;
const c = 6;

const delta = b*b - 4*a*c; 

console.log("Esse é o valor de Delta: " + delta);

if(a===0){
console.log("Essa equação não é do segundo grau!");
}
if(delta<0){
    console.log("Raízes Imaginárias, Delta menor que zero!")

}
if(delta ===0){
    const raiz = -b/(2*a);
    console.log("Raiz única de seguinte valor: " + raiz);
}
if(delta>0){
const raiz1 = (-b + Math.sqrt(delta))/(2*a);
const raiz2 = (-b - Math.sqrt(delta)/(2*a));

console.log("Raízes distintas!")
console.log("Valor raiz 1: " + raiz1);
console.log("Valor raiz 2: " + raiz2);

}