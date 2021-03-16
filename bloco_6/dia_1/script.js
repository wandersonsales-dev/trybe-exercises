const selectEl = document.querySelector('#estado');
const buttonSend = document.querySelector('#button-send');
const dataInicio = document.querySelector('#data_inicio');
const dataForm = document.querySelector('#dataForm');

const estados = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

const createOptions = () => {
  Object.values(estados).forEach((key) => {
    let op = document.createElement('option');
    op.value = key;
    op.innerText = key;
    selectEl.appendChild(op);
  });
}

const checkData = (e) => {
  e.preventDefault();
  const day = parseInt(dataInicio.value.substring(8));
  const month = parseInt(dataInicio.value.substring(5, 7));
  const year = parseInt(dataInicio.value.substring(0, 4));
  if((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0)){
    console.log(`${day}-${month}-${year}`);
  } else {
    alert('erro na data');
  }

}

const activeButtonSend = () => {
  buttonSend.addEventListener('click', checkData);
}

window.onload = () => {
  createOptions();
  activeButtonSend();
}