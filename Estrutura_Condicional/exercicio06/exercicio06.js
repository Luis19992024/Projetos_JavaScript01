const saldoBancario = 5000;
let saldoComTarifa;

if(saldoBancario<1000){
 saldoComTarifa = saldoBancario-25;

console.log("O saldo com a tarifa é: "+saldoComTarifa );

}else if(saldoBancario>1000.01 && saldoBancario <=2000){
saldoComTarifa =saldoBancario-20;
console.log("O saldo com a tarifa é: " + saldoComTarifa);

}else if(saldoBancario>=2000.01 && saldoBancario<=3500){
    saldoComTarifa= saldoBancario-13;
    console.log("Saldo com a tarifa é: " + saldoComTarifa)
}else if(saldoBancario>3500){
    console.log("Tarifa Isenta!");
}
    