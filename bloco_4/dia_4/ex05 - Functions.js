// 5 -  Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//        Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//        Valor esperado no retorno da função: 2 .

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

function moreIsRepeated(arrayNumbers){
  let numbers = [];

  for(let index = 0; index < arrayNumbers.length; index += 1){
    numbers.push(1);
  }

  for(let index = 0; index < arrayNumbers.length; index += 1){
    for(let compareIndex = 0; compareIndex < arrayNumbers.length; compareIndex += 1){
      if(index !== compareIndex){
        if(arrayNumbers[index] === arrayNumbers[compareIndex]){
          numbers[index] += 1;
        }
      }
    }
  }

  let index = highestValue(numbers);

  return arrayNumbers[index];

}

console.log(moreIsRepeated([2, 3, 2, 5, 8, 2, 3]));
