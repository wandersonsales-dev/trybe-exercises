/* eslint-disable no-console */
// Q04. Crie uma HOF que receberá três parâmetros. O primeiro será um
//      array de respostas corretas (Gabarito), o segundo será um array
//      de respostas a serem checadas (Respostas da pessoa estudante)
//      e o terceiro é uma função que checa se a resposta está correta
//      e faz a contagem da pontuação final recebida pela pessoa
//      estudante. Ao final a HOF deve retornar o total da contagem
//      de respostas certas.

//      Quando a resposta for correta a contagem sobe 1 ponto,
//      quando for incorreta desce 0.5 pontos, e quando não
//      houver resposta ("N.A") não altera-se a contagem.

//      const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
//      const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswer = (a, b) => a === b;

const gabarito = (answerCorrects, answerStudent, action) => {
  let total = 0;
  for (let index = 0; index < answerCorrects.length; index += 1) {
    if (answerStudent !== 'N.A') {
      total = action(answerCorrects[index], answerStudent[index]) ? total + 1 : total - 0.5;
    }
  }
  return total;
};

console.log(gabarito(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], verifyAnswer));
