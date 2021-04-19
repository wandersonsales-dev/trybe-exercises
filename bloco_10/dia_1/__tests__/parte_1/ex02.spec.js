const myRemove = require('../../parte_1/ex02');

describe('Questão 2', () => {
  test('myRemove([1, 2, 3, 4], 3) deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});
