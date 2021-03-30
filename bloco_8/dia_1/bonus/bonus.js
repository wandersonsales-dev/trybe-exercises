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
const getDamageDragon = () => (Math.random() * (dragon.strength - 15) + 15).toFixed(2);
dragon.damage = getDamageDragon;

console.log(`Dano do Dragão: ${battleMembers.dragon.damage()}`);

// Q02. Crie uma função que reotorna o dano causado pelo warrior .
//      O dano será um número aleatório entre o valor do atributo
//      strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const getDamageWarrior = () => (Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength).toFixed(2);
warrior.damage = getDamageWarrior;

console.log(`Dano do Cavaleiro: ${battleMembers.warrior.damage()}`);
