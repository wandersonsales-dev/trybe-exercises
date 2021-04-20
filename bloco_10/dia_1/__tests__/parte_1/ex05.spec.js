const { obj1, obj2, obj3 } = require('../../parte_1/ex05');

describe('Questão 5', () => {
  test('obj1 e obj2 são iguais', () => {
    expect(obj1).toEqual(obj2);
  });
});
