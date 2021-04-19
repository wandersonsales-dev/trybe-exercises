const sum = require('../../parte_1/ex01');

describe('Questão 01', () => {
  test('A soma de 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('A soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('A soma de 4 e \'5\' deve lançar um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  });
});
