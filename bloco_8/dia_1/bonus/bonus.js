/* eslint-disable max-len */
/* eslint-disable no-console */
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Q01. Crie uma função que retorna o dano do dragão.
//      O dano será um número aleatório entre 15 (dano mínimo)
//      e o valor do atributo strength (dano máximo).

// Math.random() * (max - min) + min;
const damageDragon = () => (Math.random() * (dragon.strength - 15) + 15).toFixed(2);

// Q02. Crie uma função que reotorna o dano causado pelo warrior .
//      O dano será um número aleatório entre o valor do atributo
//      strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const damageWarrior = () => (Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength).toFixed(2);
battleMembers.warrior.damage = damageDragon;

// Q03. Crie uma função que retorna um objeto com duas chaves e dois valores
//      contendo o dano e a mana gasta pelo mago em um turno.
//      O dano será um número aleatório entre o valor do atributo
//      intelligence (dano mínimo) e o valor de
//      intelligence * 2 (dano máximo).
//      A mana consumida por turno é 15. Além disto a função deve
//      ter uma condicional, caso o mago tenha menos de 15 de mana
//      o valor de dano recebe uma mensagem
//      (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const attackMageCost = () => (Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence).toFixed(2);
battleMembers.mage.damage = attackMageCost;

const manaMage = () => {
  if (mage.mana > 15) {
    mage.mana -= 15;
    return mage.mana;
  }
  return 'Não possui maná suficiente';
};
battleMembers.mage.mana = manaMage;

// PARTE 02

const gameActions = {
  knightShift: (action) => {
    battleMembers.dragon.healthPoints -= action();
    return battleMembers.dragon.healthPoints;
  },
  mageShift: (action) => {
    battleMembers.dragon.healthPoints -= action();
  },
};

gameActions.knightShift(battleMembers.warrior.damage);
gameActions.mageShift(battleMembers.mage.damage);
