const searchEmployee = require('../../bonus/exBonus');

describe('BÔNUS', () => {
  test('A função searchEmployee() existe.', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Ao passar um ID incorreto deve retornar ID não identificada', () => {
    expect(() => searchEmployee('9852-2-2-8', 'firstName')).toThrowError(new Error('ID não identificada'));
  });

  test('Ao passar um ID correto e uma informação que não exista deve retornar: Informação indisponível', () => {
    expect(() => searchEmployee('9852-2-2', 'age')).toThrowError(new Error('Informação indisponível'));
  });

  test(`A função deve retornar um objeto no formato {id: '', firstName: ''},
  conforme as informações passadas por parametros`, () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual({ id: '9852-2-2', firstName: 'Jeff' });
  });
});
