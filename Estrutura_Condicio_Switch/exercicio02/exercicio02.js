const condicaoPagamento = 4;
const valorProduto = 100;
let valorProdutoDescontado;
let resultadoFinal;
let str = " ";

switch(condicaoPagamento){
    case 1:
        str = "Pagamento à vista, 10% desconto";
        valorProdutoDescontado = valorProduto * 0.1;
        resultadoFinal = valorProduto - valorProdutoDescontado;
        break;

    case 2:
        str = "Pagamento à vista, 5% de desconto ";
        valorProdutoDescontado = valorProduto * 0.05;
        resultadoFinal = valorProduto - valorProdutoDescontado;
        break;

    case 3:
        str = "Pagamento em 2x, preço normal sem juros ";
        resultadoFinal = valorProduto;
        break;
    
    case 4: 
    str = "Em 3x vezes, preço normal da etiqueta + 10%, ";
    valorProdutoDescontado = valorProduto * 0.1;
    resultadoFinal = valorProduto + valorProdutoDescontado;    
    break;

    default: 
    str = "Opção inválida!";
    resultadoFinal = 0;
}

console.log(str + "Valor R$: " +" "+ resultadoFinal);