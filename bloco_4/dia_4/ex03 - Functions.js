// 3 -  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//        Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//        Valor esperado no retorno da função: 6 .

function smallerValue(arrayNumbers){
  let smaller;
  let smallerValueIndex;

  for(let index = 0; index < arrayNumbers.length; index += 1){
    if(index === 0){
      smaller = arrayNumbers[index];
      smallerValueIndex = index;
    }else{
      if(arrayNumbers[index] < smaller){
        smaller = arrayNumbers[index];
        smallerValueIndex = index;
      }
    }
  }

  return smallerValueIndex;
}

console.log(highestValue([2, 4, 6, 7, 10, 0, -3]));
