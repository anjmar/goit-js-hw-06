let counterValue = 0;

const addListenerBtn = document.querySelector('[data-action="decrement"]');
const removeListenerBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

addListenerBtn.addEventListener('click', () => {
  counterValue -= 1;

  valueEl.innerHTML = counterValue;
});

removeListenerBtn.addEventListener('click', () => {
  counterValue += 1;

  valueEl.innerHTML = counterValue;
});
