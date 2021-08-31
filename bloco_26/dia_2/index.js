const retornaPromise = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const value = ((num1 + num2) * num3);

    if (value < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(value);
  });
}


const geraNumero = () => Math.floor(Math.random() * 100 + 1);

// retornaPromise(geraNumero(), geraNumero(), geraNumero())
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

const main = async () => {
  const result = await retornaPromise(geraNumero(), geraNumero(), geraNumero());
  console.log(result);
}

main();
