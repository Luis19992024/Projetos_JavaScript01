const valorDoProduto = 500;
const opcao = '1';
let precoFinal;
let resultado;
 //Condição de pagamento;

 console.log("Selecione Condição Pagamento");
 console.log("1-À vista, dinheiro ou cheque, 10% desconto");
 console.log("2-À vista, cartão de crédito, 5% desconto");
 console.log("3-Em 2 vezes, preço normal do produto sem juros");
 console.log("4-Em 3 vezes, preços normal do produto + 10% de juros");
 console.log(" ");

 if(opcao ==='1'){
resultado = valorDoProduto * 0.1;
precoFinal = valorDoProduto - resultado;

console.log("O preço do produto com desconto 10% R$: " + precoFinal);

 }else if(opcao==='2'){
    resultado = valorDoProduto * 0.05;
    precoFinal = valorDoProduto - resultado;

    console.log("O preço do produto com desconto 5% R$: " + precoFinal);

 }else if(opcao==='3'){
precoFinal = valorDoProduto;

console.log("O preço normal produto sem desconto R$: " + precoFinal);

 }else if(opcao ==='4'){
resultado = valorDoProduto * 0.1;
precoFinal = valorDoProduto + resultado;

console.log("O preço do produto com juros de 10% R$: " + precoFinal);

 }

