const inputButton = document.querySelector('#login-button');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');

const inputLogin = document.querySelector('#input-login');
const inputSenha = document.querySelector('#input-senha');
inputButton.addEventListener('click', () => {
  const login = 'tryber@teste.com';
  const senha = '123456';

  if (inputLogin.value !== login || inputSenha.value !== senha) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const submitButton = document.querySelector('#submit-btn');
agreement.addEventListener('change', (event) => {
  // submitButton.disabled = !event.target.checked;
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const counter = document.querySelector('#counter');
textarea.addEventListener('keyup', () => {
  const characters = textarea.value;
  counter.innerHTML = 500 - characters.length;
});

const form = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const selectedHouse = document.querySelector('#house');
const familyRadio = document.querySelectorAll('.family');
const subjectsCheckbox = document.querySelectorAll('.subject');
const ratesRadio = document.querySelectorAll('.rate');

function getRadioValue(language) {
  for (let i = 0; i < language.length; i += 1) {
    if (language[i].checked) {
      return language[i].value;
    }
  }
  if (!familyRadio.checked) {
    return '';
  }
}

function getContentValue(subjects) {
  const lista = [];
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      lista.push(subjects[i].value);
    }
  }
  return lista.join(', ');
}

function getAvaliationValue(rates) {
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      return rates[i].value;
    }
  }
  if (!rates.checked) {
    return '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.innerHTML = `<div><p>Nome: ${inputName.value} ${inputLastName.value}</p>
      <p>Email: ${inputEmail.value}</p>
      <p>Casa: ${selectedHouse.value}</p>
      <p>Família: ${getRadioValue(familyRadio)}</p>
      <p>Matérias: ${getContentValue(subjectsCheckbox)}</p>
      <p>Avaliação: ${getAvaliationValue(ratesRadio)}</p>
      <p>Observações: ${textarea.value}</p></div>
    `;
});
