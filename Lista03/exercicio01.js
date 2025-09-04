function calcularPerdaCarga(Q, D, C){
const J = Math.pow(Q, 1.85) * 10.643 * Math.pow(D, -4.87) * (C, -1.85)

return J;
}

const vazao= 10; // L/Min
const diametroTubo=2; // Raio
const coeRugosidade = 100; 

const calPerdaCarga = calcularPerdaCarga(vazao, diametroTubo, coeRugosidade);

console.log("A perda de carga das tubulações é: " + calPerdaCarga);