let generateRandomNumber = require('../ex01');

describe('Questão 02', () => {
  it('Testa se função faz outra operação que não seja a original', () => {
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(generateRandomNumber(10, 5)).toBe(2);
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});
