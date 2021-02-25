// 8 -  Utilizando for , crie uma array que vá de 1 até 25 e
//      imprima o resultado;

let array = [];

for(let i = 0; i < 25; i++){
  array.push(i+1);
}

console.log(array);

// 9 -  Utilizando o array criado no exercício anterior imprima
//      o resultado da divisão de cada um dos elementos por 2 .

for(let i = 0; i < array.length; i++){
  console.log('array[' + i + '] = ' + array[i] + ' --> [' + array[i] + ' / 2 = ' + array[i]/2 + ']');
}
