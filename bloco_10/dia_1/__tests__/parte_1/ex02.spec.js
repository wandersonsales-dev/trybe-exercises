const myRemove = require('../../parte_1/ex02');

describe('Questão 2', () => {
  test('myRemove([1, 2, 3, 4], 3) deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove([1, 2, 3, 4], 3) NÃO deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('O array [1, 2, 3, 4] NÃO deve sofrer alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('myRemove([1, 2, 3, 4], 5) deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  });
});
