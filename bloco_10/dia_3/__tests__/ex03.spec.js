const ex01 = require('../ex01');

describe('Questão 03', () => {
  const generateRandomNumber = jest.spyOn(ex01, 'generateRandomNumber');

  beforeEach(() => {
    generateRandomNumber.mockReset();
  });

  describe('', () => {
    it('Testa se a função recebe 3 parâmetros e retorna a multiplicação.', () => {
      generateRandomNumber.mockImplementation((a, b, c) => a * b * c);

      expect(generateRandomNumber(1, 2, 3)).toBe(6);
      expect((generateRandomNumber)).toHaveBeenCalledTimes(1);
    });
  });

  describe('', () => {
    it('Testa se a função recebe 1 parâmetro e retorna o seu dobro.', () => {
      generateRandomNumber.mockImplementation((a) => a * 2);

      expect(generateRandomNumber(2)).toBe(4);
      expect((generateRandomNumber)).toHaveBeenCalledTimes(1);
    });
  });
});
