// Q05. Dada o array de nomes, retorne a quantidade de vezes
//      em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const countA = (word) => word.toString().toLowerCase().split('')
    .reduce((acc, cur) => (cur === 'a' ? acc + 1 : acc + 0), 0);

  return names.reduce((acc, cur) => (countA(cur) ? acc + countA(cur) : acc + 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
