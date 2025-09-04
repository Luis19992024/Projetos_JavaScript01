const quaPessoas = 78000;

const valorPopular = 5;
const valorGeral = 10;
const valorArquibancada = 20;
const valorCadeiras = 40; 

const valorTotalPopular = quaPessoas * 0.1 * valorPopular;

const valorTotalGeral = quaPessoas * 0.5 * valorGeral;

const valorTotalArquibancada = quaPessoas * 0.3 * valorArquibancada;

const valorTotalCadeiras = quaPessoas * 0.1 * valorCadeiras;

let rendaTotal = valorTotalPopular + valorTotalGeral + valorTotalArquibancada + valorTotalCadeiras;



console.log("A quantidade de pessoas totais é : " + quaPessoas + " e a renda total R$: " + rendaTotal);