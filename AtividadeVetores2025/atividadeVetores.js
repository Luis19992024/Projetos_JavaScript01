const opcoes = document.getElementById("idOpcoes");
const resultado = document.getElementById("idSaida");

let vetorA = [];
let vetorB = [];
let vetorIntercalado = [];


function gerarNumerosA() {
  vetorA = [];
  for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    vetorA.push(numeroAleatorio);
  }

  atualizarSaida();

}

function gerarNumerosB() {
  vetorB = [];
  for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    vetorB.push(numeroAleatorio);
  }
  atualizarSaida();
}

function atualizarSaida() {
  resultado.innerText =
    "Vetor A: " + vetorA.join(" | ") + "\n" +
    "Vetor B: " + vetorB.join(" | ");
}

function intercalarVetor() {
  vetorIntercalado = [];
  let tamanho = Math.max(vetorA.length, vetorB.length);
  for (let i = 0; i < tamanho; i++) {
    if (i < vetorA.length) vetorIntercalado.push(vetorA[i]);
    if (i < vetorB.length) vetorIntercalado.push(vetorB[i]);
  }
}

function calcularProdutoEscalar() {
  let tamanho = Math.min(vetorA.length, vetorB.length);
  let soma = 0;
  for (let i = 0; i < tamanho; i++) {
    soma += vetorA[i] * vetorB[i];
  }
  return soma;
}

function verificarVetores() {
  if (vetorA.length !== vetorB.length) return "Vetores de tamanhos diferentes";
  for (let i = 0; i < vetorA.length; i++) {
    if (vetorA[i] !== vetorB[i]) return "Valores não idênticos";
  }
  return "Valores idênticos";
}

function gerarNumerosABtn() {
  gerarNumerosA();
}

function gerarNumerosBBtn() {
  gerarNumerosB();
}

function executarBtn() {
  let opcaoSelecionada = opcoes.value;
  let saida = "";

  switch (opcaoSelecionada) {

    case "intercalarNOrdenado":
      intercalarVetor();
      saida = "vetor intercalado não ordenado " + vetorIntercalado.join(" | ");
      break;

    case "intercalarOrdenado":
     
  let vetorAOrdenado = [...vetorA].sort((a, b) => a - b);
  let vetorBOrdenado = [...vetorB].sort((a, b) => a - b);

  vetorIntercalado = [];
  let i = 0, j = 0;
  while (i < vetorAOrdenado.length && j < vetorBOrdenado.length) {
    if (vetorAOrdenado[i] < vetorBOrdenado[j]) {
      vetorIntercalado.push(vetorAOrdenado[i]);
      i++;
    } else {
      vetorIntercalado.push(vetorBOrdenado[j]);
      j++;
    }
  }
  
    while (i < vetorAOrdenado.length) {
    vetorIntercalado.push(vetorAOrdenado[i]);
    i++;
  }
 
      while (j < vetorBOrdenado.length) {
        vetorIntercalado.push(vetorBOrdenado[j]);
         j++;
  }

  
  saida =
    "Vetor A original: " + vetorA.join(" | ") + "\n" +
    "vetor B original: " + vetorB.join(" | ") + "\n\n" +
    "vetor A ordenado: " + vetorAOrdenado.join(" | ") + "\n" +
    "vetor B ordenado: " + vetorBOrdenado.join(" | ") + "\n\n" +
    "vetor intercalado ordenado: " + vetorIntercalado.join(" | ");
  break;
    case "produtoEscalar":
    vetorA = vetorA.slice(0, 5);
  vetorB = vetorB.slice(0, 5);

  let produto = 0;
  for (let i = 0; i < 5; i++) {
    produto += vetorA[i] * vetorB[i];
  }
  saida = "PRODUTO ESCALAR : " + produto;
  break;
  

    case "identicos":
       let iguais = true;
  for (let i = 0; i < 5; i++) {
    if (vetorA[i] !== vetorB[i]) {
      iguais = false;
      break;
    }
  }
if (iguais) {
  saida = " Os 5 primeiros números de A e B são iguais";
} else {
  saida = " Os 5 primeiros números de A e B são diferentes";
}
break;
  }

  resultado.innerText =
    "vetor A: " + vetorA.join(" | ") + "\n" +
    "vetor B: " + vetorB.join(" | ") + "\n" +
    saida;
}