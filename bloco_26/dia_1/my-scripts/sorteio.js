const { questionInt, question } = require('readline-sync');

function generateNumber() {
  return Math.ceil(Math.random() * 10);
}

function sorteio() {
  let acertou = false;
  let continua = true;

  while (!acertou && continua) {
    const palpite = questionInt('Qual o seu palpite? ');

    const number = generateNumber();

    if (palpite === number) {
      console.log('Parabéns, número correto!');
      acertou = true;
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${number}`);
    }

    const again = question('Deseja jogar novamente (s/N)? ');

    switch (again) {
      case 's':
        continua = true;
        break;
      case 'n':
        continua = false;
        break;
      default:
        continua = false;
        break;
    }
  }
}

module.exports = sorteio;
