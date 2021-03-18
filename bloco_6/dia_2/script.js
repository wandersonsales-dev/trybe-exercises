const selectEl = document.querySelector('#estado');
const buttonSend = document.querySelector('#button-send');
const inputs = document.querySelectorAll('input, select, textarea');
const dataForm = document.querySelector('#dataForm');

const estados = {
  FR: 'Selecione um estado',
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goías',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraíma',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

const createOptions = () => {
  Object.values(estados).forEach((key) => {
    const op = document.createElement('option');
    op.value = key;
    op.innerText = key;
    selectEl.appendChild(op);
  });
};

const checkFieldText = (field) => {
  if (field.value.length) {
    return true;
  }
  return false;
};

const checkFieldEmail = (field) => {
  if (field.value.length) {
    if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(field.value)) {
      return true;
    }
  }
  return false;
};

const checkFieldSelect = (field) => {
  if (field.value !== 'Selecione um estado') {
    return true;
  }
  return false;
};

const checkFieldTextarea = (field) => {
  if (field.value.length) {
    return true;
  }
  return false;
};

const checkFieldData = (field) => {
  const day = parseInt(field.value.substring(8), 10);
  const month = parseInt(field.value.substring(5, 7), 10);
  const year = parseInt(field.value.substring(0, 4), 10);
  if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0)) {
    return true;
  }
  return false;
};

const checkData = (e) => {
  dataForm.innerHTML = '';
  const completeDiv = document.createElement('div');
  completeDiv.className = 'newData';
  let err = false;
  let contador = 0;
  let countRadio = 0;

  inputs.forEach((el) => {
    if (el.type === 'text') {
      if (!checkFieldText(el)) {
        err = true;
        alert(`O elemento ${el.id} é obrigatório!`);
      }
    }

    if (el.type === 'email') {
      if (!checkFieldEmail(el)) {
        err = true;
        alert(`O elemento ${el.id} está vazio ou errado!`);
      }
    }

    if (el.type === 'select-one') {
      if (!checkFieldSelect(el)) {
        err = true;
        alert(`O elemento ${el.id} é obrigatório!`);
      }
    }

    if (el.type === 'radio') {
      contador += 1;
      if (el.checked) {
        countRadio += 1;
      }
    }

    if (contador === 2 && countRadio === 0) {
      err = true;
      alert(`O elemento ${el.type} é obrigatório!`);
      countRadio = 0;
      contador = 0;
    }

    if (el.type === 'textarea') {
      if (!checkFieldTextarea(el)) {
        err = true;
        alert(`O elemento ${el.id} é obrigatório!`);
      }
    }

    if (el.type === 'date') {
      if (!checkFieldData(el)) {
        err = true;
        alert(`O elemento ${el.id} está vazio ou errado!`);
      }
    }

    if (err !== true) {
      const newDiv = document.createElement('div');
      newDiv.innerHTML += el.value;
      completeDiv.appendChild(newDiv);
    }
  });

  if (err === true) {
    e.preventDefault();
  } else {
    dataForm.appendChild(completeDiv);
  }
};

const activeButtonSend = () => {
  buttonSend.addEventListener('click', checkData);
};

window.onload = () => {
  createOptions();
  activeButtonSend();
};
