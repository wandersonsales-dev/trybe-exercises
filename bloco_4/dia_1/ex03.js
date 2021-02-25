let a = 5;
let b = 7;
let c = 4;

if(a > b){
  if(a > c){
    if(b > c){
      console.log("1º Maior: A");
      console.log("2º Maior: B");
      console.log("3º Maior: C");
    } else if (c > b) {
      console.log("1º Maior: A");
      console.log("2º Maior: C");
      console.log("3º Maior: B");
    } else {
      console.log("1º Maior: A");
      console.log("2º Maior: B é igual ao C");
    }
  }
} else if (b > c) {
  if(b > a) {
    if(a > c){
      console.log("1º Maior: B");
      console.log("2º Maior: A");
      console.log("3º Maior: C");
    }else if(c > a){
      console.log("1º Maior: B");
      console.log("2º Maior: C");
      console.log("3º Maior: A");
    } else {
      console.log("1º Maior: B");
      console.log("2º Maior: C é igual a A");
    }
  }
} else {
  if(a > b){
    console.log("1º Maior: C");
    console.log("2º Maior: A");
    console.log("3º Maior: B");
  } else if(b > a) {
    console.log("1º Maior: C");
    console.log("2º Maior: B");
    console.log("3º Maior: A");
  } else {
    console.log("1º Maior: C");
    console.log("2º Maior: B é igual a A");
  }
}