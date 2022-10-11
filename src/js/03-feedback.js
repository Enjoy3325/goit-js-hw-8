import throttle from 'lodash.throttle';
const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

ref.form.addEventListener('submit', onSubmitForm);
ref.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {
  email: '',
  message: '',
};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
}

const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (data) {
  ref.email.value = data.email;
  ref.textarea.value = data.message;
}
