// 1 -  (Difícil) Faça um programa que receba uma string em algarismos romanos e
//      retorne o número que a string representa.
//      Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
//      Dicas:
//      Uma string é um array de caracteres, então cada elemento do array é uma letra.
//      O valor de cada numeral romano é:

//        | I   | 1    |
//        | --- | ---- |
//        | IV  | 4    |
//        | V   | 5    |
//        | IX  | 9    |
//        | X   | 10   |
//        | XL  | 40   |
//        | L   | 50   |
//        | XC  | 90   |
//        | C   | 100  |
//        | CD  | 400  |
//        | D   | 500  |
//        | CM  | 900  |
//        | M   | 1000 |

//        Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
//        Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
//        Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior
//        que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

let romanNumbers = {
  i : 1,
  v : 5,
  x : 10,
  l : 50,
  c : 100,
  d : 500,
  m : 1000
}

function whatIsRomanNumber(romanNumber){
  let splitedRomanNumber = romanNumber.toLowerCase().split('');
  let result = 0;

  for(let index = 0; index < splitedRomanNumber.length; index += 1){
    if(index === 0){
      result += romanNumbers[splitedRomanNumber[index]];
    }else{
      if(romanNumbers[splitedRomanNumber[index]] > result){
        result -= romanNumbers[splitedRomanNumber[index]];
      }else{
        result += romanNumbers[splitedRomanNumber[index]];
      }
    }
  }

  if(result < 0){
    result = result * (-1);
  }

  return result;
}

console.log(whatIsRomanNumber('iX'));
