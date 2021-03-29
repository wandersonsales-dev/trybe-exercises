const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderArray = (arr) => {
  const newArr = [...arr];
  let aux;
  for (let x = 0; x < newArr.length; x += 1) {
    for (let y = 0; y < newArr.length - x; y += 1) {
      if (newArr[y] > newArr[y + 1]) {
        aux = newArr[y + 1];
        newArr[y + 1] = newArr[y];
        newArr[y] = aux;
      }
    }
  }
  return newArr;
};

// BÔNUS
const sortArray = (arr) => {
  const newArr = arr.sort((a, b) => a - b);

  return newArr;
};

console.log(oddsAndEvens);

console.log(orderArray(oddsAndEvens));
console.log(sortArray(oddsAndEvens));
