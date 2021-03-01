// 7 -  Crie uma função que receba uma string word e outra string ending.
//      Verifique se a string ending é o final da string word. Considere
//      que a string ending sempre será menor que a string word.

//        Valor de teste: "trybe" e "be"
//        Valor esperado no retorno da função: true
//        verificaFimPalavra("trybe", "be") ;
//        Retorno esperado: true
//        verificaFimPalavra("joaofernando", "fernan") ;
//        Retorno esperado: false

function checkEnd(word , ending){
  let splitedEnding = ending.split('');
  let splitedWord = word.split('');
  let endingReverse = [];
  let wordReverse = [];
  let isEqualEnding = true;

  for(let index = splitedWord.length-1; index >= 0; index -= 1){
    wordReverse.push(splitedWord[index]);
  }

  for(let index = splitedEnding.length-1; index >= 0; index -= 1){
    endingReverse.push(splitedEnding[index]);
  }

  for(indexEnding = 0; indexEnding < endingReverse.length; indexEnding += 1){
    if(endingReverse[indexEnding] !== wordReverse[indexEnding]){
      isEqualEnding = false;
      break;
    }
  }

  return isEqualEnding;
}

console.log(checkEnd("trybe", "be"));
