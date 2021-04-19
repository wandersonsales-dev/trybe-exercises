const sum = require('../../parte_1/ex01');

describe('Questão 01', () => {
  test('A soma de 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
