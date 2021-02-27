// 4-   Depois, faça uma pirâmide com n asteriscos de base:

//      n = 5

//        *
//       ***
//      *****

let n = 6;
let meio, asterix;

if(n % 2 !== 0){
  meio = (n+1)/2;
  asterix = 1;
}else{
  meio = (n/2) + 1;
  asterix = 2;
}

let cont = 0;
let spaced = '';
let addAsterix = false;

for(let line = 1; line <= meio; line += 1){
  if((line !== meio)){
    spaced += ' ';
  }else{
    for(let dot = 1; dot <= asterix; dot += 1){
      spaced += '*';
      addAsterix = true;

      if(dot === asterix){
        
        if(asterix >= n){
          console.log(spaced);
          break;
        }
        
        if(addAsterix){
          asterix += 2;
          console.log(spaced);
          line = 1;
          spaced = '';
          cont += 1;
          line = cont;
          break;
        }
      }
    }
  }
}
