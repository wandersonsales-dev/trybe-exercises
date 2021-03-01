// 4 -  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//        Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//        Valor esperado no retorno da função: Fernanda .

function biggestNameFunction(names){
  let biggestName;

  for(let index = 0; index < names.length; index += 1){
    if(index === 0){
      biggestName = names[index];
    }else{
      if(names[index].length > biggestName.length){
        biggestName = names[index];
      }
    }
  }

  return biggestName;
}

console.log(biggestNameFunction(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
