const precoFilme = document.getElementById("idInPreco");
const diaSemana = document.getElementById("idInDiaSemana");
const tipoFilme = document.getElementById("idInTipoFilme");
const botaoExecutar = document.getElementById("Executar");
const resultado = document.getElementById("idOutResultado");


function calcularPrecoFInal(precoFilme, diaSemana, tipoFilme){
let desconto = 0;
let acrescimo = 0;

if(diaSemana ==2 || diaSemana==3 || diaSemana ==5) desconto = precoFilme * 0.40;
 
if(tipoFilme ==="lancamento") acrescimo = precoFilme * 0.15;

  const precoFinal = precoFilme + acrescimo - desconto; 
  return precoFinal;
}
function executarBtn(){
let valorFilme = Number(precoFilme.value);
let dia = Number(diaSemana.value);
let filmeT = tipoFilme.value; 
resultado.textContent = calcularPrecoFInal(valorFilme, dia, filmeT);



}