// 2 -  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//      Array de teste: [2, 3, 6, 7, 10, 1]; .
//      Valor esperado no retorno da função: 4 .

function highestValue(arrayNumbers){
  let larger;
  let largerValueIndex;

  for(let index = 0; index < arrayNumbers.length; index += 1){
    if(index === 0){
      larger = arrayNumbers[index];
      largerValueIndex = index;
    }else{
      if(arrayNumbers[index] > larger){
        larger = arrayNumbers[index];
        largerValueIndex = index;
      }
    }
  }

  return largerValueIndex;
}

console.log(highestValue([2, 3, 6, 7, 10, 1]));
