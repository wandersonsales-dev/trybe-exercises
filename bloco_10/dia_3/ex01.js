// Q01. Crie uma função que gere um número aleatório entre 0 e 100.
//      Você irá criar também os testes para essa função. Utilizando
//      o mock, defina o retorno padrão como 10. Teste se a função
//      foi chamada, qual seu retorno e quantas vezes foi chamada.

const generateRandomNumber = () => Math.round(Math.random() * 100);

module.exports = { generateRandomNumber };
