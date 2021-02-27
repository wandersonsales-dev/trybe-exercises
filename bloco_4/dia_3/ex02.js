// 2-   Para o segundo exercício, faça o mesmo que antes, mas
//      que imprima um triângulo retângulo com 5 asteriscos de base.
//      Por exemplo:

//      n = 5

//      *
//      **
//      ***
//      ****
//      *****

let n = 3;
let lineTriangle = '';

for(let line = 0; line < n; line += 1){
  lineTriangle += '*';
  console.log(lineTriangle);
}
