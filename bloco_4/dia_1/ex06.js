let peca = 'RAINHA';
peca = peca.toLowerCase();

switch (peca) {
  case 'rei':
    console.log('Uma casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais');
    break;
  case 'torre':
    console.log('pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda)');
    break;
  case 'bispo':
    console.log('Sem restrição de número de casas, mas somente no sentido diagonal');
    break;
  case 'cavalo':
    console.log('Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção');
    break;
  case 'peão':
    console.log('Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.');
    break;
  default:
    console.log('Erro');
}
