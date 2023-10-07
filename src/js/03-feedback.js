import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const btn = document.querySelector('button');

form.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: email.value,
      message: message.value,
    };
    if (email.value != '' && message.value != '') {
      btn.removeAttribute('disabled');
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  }, 500)
);

document.addEventListener('DOMContentLoaded', autocomplete);

function autocomplete() {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formState) {
    email.value = formState.email;
    message.value = formState.message;
  }
}

form.addEventListener('submit', clearValues);

function clearValues(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
  console.log({
    email: email.value,
    message: message.value,
  });
}
