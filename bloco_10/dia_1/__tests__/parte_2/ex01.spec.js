const { encode, decode } = require('../../parte_2/ex01');

describe('Encode', () => {
  test('Encode deve ser uma função', () => {
    expect(typeof encode).toBe('function');
  });

  test('encode(aeiou) deve retornar 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('encode(zxcv) deve retornar zxcv', () => {
    expect(encode('zxcv')).toBe('zxcv');
  });

  test('encode(aeiou) deve retornar uma string de tamanho 5', () => {
    expect(encode('zxcv')).toHaveLength(4);
  });
});

describe('Decode', () => {
  test('Decode deve ser uma função', () => {
    expect(typeof decode).toBe('function');
  });

  test('decode(12345) deve retornar aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('decode(6789) deve retornar 6789', () => {
    expect(decode('6789')).toBe('6789');
  });

  test('decode(12345) deve retornar uma string de tamanho 5', () => {
    expect(decode('12345').length === 5).toBeTruthy();
  });
});
