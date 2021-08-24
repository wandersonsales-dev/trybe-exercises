const { questionFloat } = require('readline-sync');

function getIMC(peso, altura) {
  return (peso / (Math.pow(altura, 2))).toFixed(2);
}

function imc() {
  const peso = questionFloat('Qual seu peso? ');
  const altura = questionFloat('Qual sua altura? ');

  const imc_result = getIMC(peso, altura);
  let message = '';

  if (imc_result < 18.5) {
    message = 'Abaixo do peso (magreza)';
  } else if (imc_result < 24.9) {
    message = 'Peso normal';
  } else if (imc_result < 29.9) {
    message = 'Acima do peso (sobrepeso)';
  } else if (imc_result < 34.9) {
    message = 'Obesidade grau I';
  } else if (imc_result < 39.9) {
    message = 'Obesidade grau II';
  } else {
    message = 'Obesidade graus III e IV';
  }

  console.log(`Seu IMC é: ${imc_result}`);
  console.log(message);
}

module.exports = imc;
