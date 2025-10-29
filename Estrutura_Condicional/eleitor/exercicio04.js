const idadeAno = document.getElementById("idInIdade");
const saida = document.getElementById("idOutResultado");

function verificarIdade(idade){

if(idade<16){
  return " Não elegível!"
}else
     if(idade>=18 && idade<=65){
  return " Eleitor obrigatório!";
}else 
    if(idade>=16 && idade<=18  || idade>=65){
  return " Eleitor facultativo";
}
}

function eventoVerificarEleitor(){
let idade = Number(idadeAno.value);
let resultado = verificarIdade(idade);

saida.innerText = resultado;

}