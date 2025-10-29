const numeroDigitado = document.getElementById("idInNumero");
const resultadoNumero = document.getElementById("idOnResutado");

function calcularNumero(valor) {
  const resto = valor % 2;
  if (resto === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

function eventoBtn() {
  const valorDigitado = Number(numeroDigitado.value);

  const tipo = calcularNumero(valorDigitado);
  const saida = " Número digitado é: " + tipo;
  resultadoNumero.innerText = saida;
}