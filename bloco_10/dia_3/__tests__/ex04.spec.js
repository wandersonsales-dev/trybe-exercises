const ex04 = require('../ex04');

describe('Questão 04', () => {
  const ex04FirstFunction = jest.spyOn(ex04, 'toUpperCase');
  const ex04SecondFunction = jest.spyOn(ex04, 'getFirstLetter');
  const ex04ThirdFunction = jest.spyOn(ex04, 'joinStrings');

  describe('', () => {
    it('Testa se a primeira função retorna uma string em caixa baixa', () => {
      ex04FirstFunction.mockImplementation((string) => string.toLowerCase());

      expect(ex04FirstFunction('SAMPLE')).toBe('sample');
    });

    it('Testa se a segunda função retorna a última letra da string', () => {
      ex04SecondFunction.mockImplementation((string) => string[string.length - 1]);

      expect(ex04SecondFunction('sample')).toBe('e');
    });

    it('Testa se a terceira função retorna as 3 strings concatenadas', () => {
      ex04ThirdFunction.mockImplementation((a, b, c) => `${a} ${b} ${c}`);

      expect(ex04ThirdFunction('deu', 'tudo', 'certo')).toBe('deu tudo certo');
    });
  });
});
