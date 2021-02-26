// 1 -  Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1){
  for(let seletor = 0; seletor < numbers.length - index; seletor += 1){
    if(numbers[seletor] > numbers[seletor+1]){
      let aux = numbers[seletor];
      numbers[seletor] = numbers[seletor+1];
      numbers[seletor+1] = aux;
    }
  }
}

console.log(numbers);

// 2 -  Ordene o array numbers em ordem decrescente e imprima seus valores;

for(let index = 0; index < numbers.length; index += 1){
  for(let seletor = 0; seletor < numbers.length-index; seletor += 1){
    if(numbers[seletor] < numbers[seletor+1]){
      let aux = numbers[seletor];
      numbers[seletor] = numbers[seletor+1];
      numbers[seletor+1] = aux;
    }
  }
}

console.log(numbers);
