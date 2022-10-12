import throttle from 'lodash.throttle';
const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

ref.form.addEventListener('submit', onSubmitForm);
ref.form.addEventListener('input', throttle(onFormInput, 500));

if (data) {
  ref.email.value = data.email;
  ref.textarea.value = data.message;
}

const formData = {
  email: ref.email.value,
  message: ref.textarea.value,
};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  if (!ref.email.value || !ref.textarea.value) {
    alert('❌ Заповніть всі поля, будь-ласка!');
  }

  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
}
