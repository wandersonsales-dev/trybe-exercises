let custo = 5;
let venda = 8;

let custoTotal = custo + (0.2 * custo);

if(custo < 0 || venda < 0){
  console.log("Valor não permitido.")
}else{
  let lucro = venda - custoTotal;
  let lucroTotal = lucro * 1000;
  console.log('Lucro total: ' + lucroTotal);
}
