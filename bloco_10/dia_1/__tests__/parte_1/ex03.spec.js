const myRemoveWithoutCopy = require('../../parte_1/ex03');

describe('Questão 3', () => {
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) deve retornar [3]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
  });
});
