const myFizzBuzz = require('../../parte_1/ex04');

describe('Questão 4', () => {
  test('myFizzBuzz(15) deve retornar \'fizzbuzz\'', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('myFizzBuzz(9) deve retornar \'fizz\'', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('myFizzBuzz(10) deve retornar \'buzz\'', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('myFizzBuzz(7) deve retornar 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('myFizzBuzz(7) deve retornar false', () => {
    expect(myFizzBuzz('arrox')).toBeFalsy();
  });
});
