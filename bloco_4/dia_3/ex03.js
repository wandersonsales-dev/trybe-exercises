// 3-   Agora inverta o lado do triângulo. Por exemplo:

//      n = 5

//          *
//         **
//        ***
//       ****
//      *****

//      Atenção! Note que esse exercício é bem mais complexo
//      que o anterior! Não basta, aqui, imprimir somente
//      asteriscos. Você precisará de uma lógica para
//      imprimir espaços também.

let n = 5;
let lineTriangle = '';
let columnTriangle = '';

for(let line = 1; line <= n; line += 1){
  columnTriangle += '*';
  for(let column = n-line; column > 0; column -= 1){
    lineTriangle += ' ';
  }
  console.log(lineTriangle,columnTriangle);
  lineTriangle = '';
}
