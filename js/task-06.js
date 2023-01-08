const inputEl = document.querySelector('#validation-input');
const validLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
  if (Number(validLength) === inputEl.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
