let { generateRandomNumber } = require('../ex01');

describe('Questão 01', () => {
  it('Testa se função retorna um valor 10.', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber()).toBe(10);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  });
});
