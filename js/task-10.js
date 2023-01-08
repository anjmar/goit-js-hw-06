function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElements = document.querySelector('#controls');
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesElements = document.querySelector('#boxes');

createBtnEl.addEventListener('click', () => {
  const amountValue = Number(inputEl.value);
  createBoxes(amountValue);
});

function createBoxes(amount) {
  const array = [];
  let width = 30;
  let height = 30;

  destroyBoxes();

  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');

    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;

    array.push(newDiv);

    width += 10;
    height += 10;
  }

  boxesElements.append(...array);
}

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesElements.innerHTML = '';
}
