let salarioBruto = 3500;
let salarioLiquido;

if(salarioBruto <= 1556.94){
  salarioLiquido = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
  salarioLiquido = salarioBruto * 0.09;
} else if(salarioBruto <= 5189.82){
  salarioLiquido = salarioBruto * 0.11;
} else {
  salarioLiquido = salarioBruto - 570.88;
}

if(salarioBruto <=1903.98){
  salarioLiquido = salarioBruto;
}else if(salarioBruto <= 2826.65){
  salarioLiquido = (salarioBruto * 0.075) - 142.80;
}else if(salarioBruto <= 3751.05){
  salarioLiquido = (salarioBruto * 0.15) - 354.80;
}else if(salarioBruto <= 4664.68){
  salarioLiquido = (salarioBruto * 0.225) - 636.13;
}else{
  salarioLiquido = (salarioBruto * 0.275) - 869.36;
}

console.log(salarioBruto -= salarioLiquido);
