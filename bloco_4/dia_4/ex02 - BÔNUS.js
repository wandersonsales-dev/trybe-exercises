function add(num1, num2) {
  
  num1 = num1.toString().split('');
  let newNum1 = [];
  num2 = num2.toString().split('');
  let newNum2 = [];
  let result = [];
  let resultRevert = [];
  let final = '';
  
  for(let indexNum1 = num1.length-1; indexNum1 >= 0; indexNum1 -= 1){
    newNum1.push(num1[indexNum1]);
  }
  
  for(let indexNum2 = num2.length-1; indexNum2 >= 0; indexNum2 -= 1){
    newNum2.push(num2[indexNum2]);
  }
  
  if(newNum1.length > newNum2.length || newNum1.length === newNum2.length){
    for(let index = 0; index < newNum1.length; index += 1 ){
      if(newNum2[index]){
        result.push(parseInt(newNum1[index])+parseInt(newNum2[index]));
      }else{
        result.push(newNum1[index]);
      }
    }
  }else{
    for(let index = 0; index < newNum2.length; index += 1 ){
      if(newNum1[index]){
        result.push(parseInt(newNum1[index])+parseInt(newNum2[index]));
      }else{
        result.push(newNum2[index]);
      }
    }
  }
  
  for(let indexResult = result.length-1; indexResult >= 0; indexResult -= 1){
    resultRevert.push(result[indexResult]);
  }
  
  for(let index = 0; index < resultRevert.length; index += 1){
    final += resultRevert[index];
  }

  final = parseInt(final);
  
  return final;
}

console.log(add(2, 11));
