// 1 -  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//      Exemplo de palíndromo: arara .
//      verificaPalindrome("arara") ;

//      Retorno esperado: true
//      verificaPalindrome("desenvolvimento") ;
//      Retorno esperado: false

function isPalindrome(word){
  let wordSplited = word.split('');
  let reverseWord = [];

  for(let index = wordSplited.length - 1; index >= 0; index -= 1){
    reverseWord.push(wordSplited[index]);
  }

  reverseWord = reverseWord.join([separator = '']);

  if(word === reverseWord){
    return true;
  }

  return false;

}

console.log(isPalindrome('arara'));