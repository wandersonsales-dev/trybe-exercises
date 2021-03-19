const selectEl = document.querySelector('#estado');
const buttonSend = document.querySelector('#button-send');
const inputs = document.querySelectorAll('input, select, textarea');
const dataForm = document.querySelector('#dataForm');
const dataInicio = document.getElementById('data_inicio');

const setDataPicker = () => {
  dataInicio.DatePickerX.init({
    format: 'dd/mm/yyyy',
    maxDate: Date.now(),
  });
};

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

const checkData = () => {
  dataForm.innerHTML = '';
  const completeDiv = document.createElement('div');
  completeDiv.className = 'newData';

  inputs.forEach((el) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML += el.value;
    completeDiv.appendChild(newDiv);
  });

  dataForm.appendChild(completeDiv);
};

window.onload = () => {
  setDataPicker();
  createOptions();
  buttonSend.addEventListener('click', checkData);
};
