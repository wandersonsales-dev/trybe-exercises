// 1-   Para o primeiro exercício de hoje, faça um programa que,
//      dado um valor n qualquer, seja n > 1 , imprima na tela um
//      quadrado feito de asteriscos de lado de tamanho n .
//      Por exemplo:

//      n = 5

//      *****
//      *****
//      *****
//      *****
//      *****

let n = 5;
let lineSquare = '';
let columnSquare = '';

for(let line = 0; line < n; line += 1){
  for(let column = 0; column < n; column += 1){
    lineSquare += ' *';
  }
  console.log(lineSquare);
  lineSquare = '';
}
