const { questionInt } = require('readline-sync');

function getVelocidade(distancia, tempo) {
  return (distancia / tempo).toFixed(2);
}

function velocidade() {
  const distancia = questionInt('Qual a distância percorrida? ');
  const tempo = questionInt('Qual o tempo gasto? ');

  const velocidade = getVelocidade(distancia, tempo);

  console.log(`A velocidade média foi de ${velocidade} m/s`);
}

module.exports = velocidade;
