let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 -  Nesse primeiro exercício, percorra o array imprimindo todos os
//      valores nele contidos com a função console.log() ;

for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// 2 -  Para o segundo exercício, você deve somar todos os valores contidos no
//      array e imprimir o resultado;

let acumulador = 0;

for(let i = 0; i < numbers.length; i++){
  acumulador += numbers[i];
}

console.log('A soma de todos os elementos é: ' + acumulador);

// 3 -  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//
//        -> A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let acumuladorQ03 = 0;

for(let i = 0; i < numbers.length; i++){
  acumuladorQ03 += numbers[i];
}

let mediaAritmetica = acumuladorQ03 / numbers.length;

console.log(mediaAritmetica);
