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

// 3 -  Para o terceiro exercício, calcule e imprima a média aritmética
//      dos valores contidos no array;
//
//        ->  A média aritmética é o resultado da soma de todos os elementos
//            divido pelo número total de elementos.

let acumuladorQ03 = 0;

for(let i = 0; i < numbers.length; i++){
  acumuladorQ03 += numbers[i];
}

let mediaAritmetica = acumuladorQ03 / numbers.length;

console.log(mediaAritmetica);

// 4 -  Com o mesmo código do exercício anterior, caso valor final seja
//      maior que 20, imprima a mensagem: "valor maior que 20". Caso não
//      seja, imprima a mensagem: "valor menor ou igual a 20";

let acumuladorQ04 = 0;

for(let i = 0; i < numbers.length; i++){
  acumuladorQ04 += numbers[i];
}

let mediaAritmeticaQ04 = acumuladorQ04 / numbers.length;

console.log(mediaAritmetica);

if(mediaAritmeticaQ04 > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20')
}

// 5 -  Utilizando for , descubra qual o maior valor contido no array
//      e imprima-o;

let maior = 0;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > maior){
    maior = numbers[i];
  }
}

console.log('O maior valor do array é: ' + maior);

// 6 -  Descubra quantos valores ímpares existem no array e imprima
//      o resultado. Caso não exista nenhum, imprima a
//      mensagem: "nenhum valor ímpar encontrado";

let impares = 0;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    impares++;
  }
}

if(impares === 0){
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log('Existem ' + impares + ' valores ímpares no array');
}

// 7 -  Utilizando for , descubra qual o menor valor contido no array
//      e imprima-o;

let menor;

for(let i = 0; i < numbers.length; i++){
  if(menor === undefined){
    menor = numbers[i];
  }
  
  if(numbers[i] < menor){
    menor = numbers[i];
  }
}

console.log('O menor valor do array é: ' + menor);
