const nomeFazendeiro = "Jovelino";
const tipoPulverizacao = 4;
const areaPulverizada = 280; 
let custoTotal;
let custoDescontado;
let str = " ";
let str1 = " ";


switch(tipoPulverizacao){

    case 1:
    str = " Pulverização contra Ervas Daninhas ";
    custoTotal = areaPulverizada * 50;
    break;

    case 2:
    str = " Pulverização contra Gafanhotos ";
    custoTotal = areaPulverizada * 100;
    break;  
    
    case 3:
    str = " Pulverização contra Broca ";
    custoTotal = areaPulverizada * 150;
    break;

    case 4:
    str = " Pulverização contra tudo acima ";
    custoTotal = areaPulverizada * 250;
    break;
    
    default:
    str = "Opção inválida";
}

if(areaPulverizada > 300){
    str1 = "Área maior que 300 acres, desconto 5% aplicado."+"\n"+ "custo total:" + custoDescontado;
custoDescontado = custoTotal - (custoTotal * 0.05);

} 
if(custoTotal > 10750){
    custoDescontado = custoTotal - (custoTotal * 0.1);
    str1="Custo total excede os R$ 10,750. Logo aplicado desconto de 10%."+"\n" +  "custo total R$:" + custoDescontado;
}

console.log("Fazendeiro: " +nomeFazendeiro+","+str + "no valor R$: " + custoTotal+"." +" "+ str1 );