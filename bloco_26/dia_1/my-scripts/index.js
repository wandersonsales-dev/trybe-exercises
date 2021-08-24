const { questionInt } = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

console.log('[ 1 ] - IMC');
console.log('[ 2 ] - VELOCIDADE');
console.log('[ 3 ] - SORTEIO');
console.log('\n');

const op = questionInt('Digite a opção desejada: ');

switch (op) {
  case 1:
    imc();
    break;
  case 2:
    velocidade();
    break;
  case 3:
    sorteio();
    break;
  default:
    console.log('Digite uma opção válida!');
    break;
};
