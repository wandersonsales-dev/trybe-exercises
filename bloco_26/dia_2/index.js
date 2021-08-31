const fs = require('fs');

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

// main();

const readFile = (name) => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(name, 'utf-8');
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

const getAll = (name) => {
  readFile(name)
    .then((result) => JSON.parse(result))
    .then((result) => result.map(({ id, name }) => console.log(`${id} - ${name}`)))
    .catch((err) => console.log(err));
}

const getOne = (id) => {
  return new Promise((resolve, reject) => {
    readFile('./simpsons.json')
      .then((result) => JSON.parse(result))
      .then((result) => result.filter((data) => +data.id === id))
      .then((result) => {
        if (result.length > 0) {
          resolve(result);
        } else {
          throw new Error('id não encontrado')
        }
      })
      .catch((err) => reject(err));
  });
}

// getOne(10)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

const remove10And6 = () => {
  const data = readFile('./simpsons.json')
    .then((result) => JSON.parse(result))
    .then((result) => result.filter((data) => (+data.id !== 10) && (+data.id !== 6)))
    .then((result) => fs.writeFileSync('./simpsons.json', JSON.stringify(result)));
}

// remove10And6();


const newArr1To4 = () => {
  const data = readFile('./simpsons.json')
    .then((result) => JSON.parse(result))
    .then((result) => result.filter((data) => +data.id <= 4))
    .then((result) => fs.writeFileSync('./simpsonFamily.json', JSON.stringify(result)));
}

// newArr1To4();

const addToSimpsonsFamilyNelson = () => {
  const data = readFile('./simpsonFamily.json')
    .then((result) => JSON.parse(result))
    .then((result) => result = [...result, { id: "5", name: "Nelson Muntz" }])
    .then((result) => fs.writeFileSync('./simpsonFamily.json', JSON.stringify(result)));
}

// addToSimpsonsFamilyNelson();

const changeNelsonToMaggie = () => {
  const data = readFile('./simpsonFamily.json')
    .then((result) => JSON.parse(result))
    .then((result) => {
      const index = result.findIndex((entrie) => entrie.name === 'Nelson Muntz');
      result[index].name = "Maggie Simpson";
      return result;
    })
    .then((result) => fs.writeFileSync('./simpsonFamily.json', JSON.stringify(result)));
}

// changeNelsonToMaggie();
