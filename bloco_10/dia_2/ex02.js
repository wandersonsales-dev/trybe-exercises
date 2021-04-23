// Q02. Utilizando a sintaxe de Promise , faça um teste que verifique
// o resultado da função getUserName para o caso em que o usuário é
// encontrado, e também um teste para o caso em que o
// usuário não é encontrado.

// Dica : Veja os dados falsos utilizados no banco de dados,
// disponíveis na variável users , para saber quais IDs existem.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => new Promise((resolve, reject) => {
  if (users[id]) {
    return resolve(users[id]);
  }

  return reject({ error: `User with ${id} not found.` });
});

const getUserName = (userID) => findUserById(userID).then((user) => user.name);

module.exports = getUserName;
