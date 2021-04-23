const ex04 = require('../ex04');

describe('Questão 05', () => {
  const ex04FirstFunction = jest.spyOn(ex04, 'toUpperCase');
  beforeEach(() => {
    ex04FirstFunction.mockRestore();
  });

  describe('', () => {
    it('Testa se a primeira função retorna uma string em caixa baixa', () => {
      ex04FirstFunction.mockImplementation((string) => string.toLowerCase());

      expect(ex04FirstFunction('SAMPLE')).toBe('sample');
    });

    it('Testa se a primeira função voltou ao estado original', () => {
      expect(ex04.toUpperCase('sample')).toBe('SAMPLE');
    });
  });
});
