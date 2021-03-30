/* eslint-disable no-console */
// Q02. Desenvolva uma HOF que retorna o resultado de um sorteio.
//      Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
//      como parâmetros o número apostado e uma função que checa
//      se o número apostado é igual ao número sorteado. O retorno
//      da sua HOF deve ser uma
//      string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const draw = (number) => Math.ceil(Math.random() * number);

const drawResult = (result, action) => {
  const numberSorted = action(4);
  return numberSorted === result ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(drawResult(3, draw));
