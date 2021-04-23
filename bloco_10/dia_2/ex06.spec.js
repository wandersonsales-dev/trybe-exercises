const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then((list) => list)
);

const getAnimal = (name) => new Promise((resolve, reject) => {
  const item = Animals.find((animal) => animal.name === name);
  if (item) {
    return resolve(item);
  }
  return reject('Nenhum animal com esse nome!');
});

const getAnimalByAge = (age) => new Promise((resolve, reject) => {
  const list = Animals.find((animalList) => animalList.age === age);
  if (list) {
    return resolve(list);
  }
  return reject('Nenhum animal com essa idade!');
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) => expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });

  describe('Quando existe o(s) animal(ais) com a idade procurada', () => {
    test('Retorna um array com os animais', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then((animals) => {
        expect(animals).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge('Bob').catch((error) => expect(error).toEqual('Nenhum animal com essa idade!'));
    });
  });
});
