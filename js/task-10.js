function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsDivEl = document.querySelector('#controls');
console.log(controlsDivEl);
const inputEl = document.querySelector('input');
console.log(inputEl);
const buttonCreateEl = document.querySelector('[data-create]');
console.log(buttonCreateEl);
const buttonDestroyEl = document.querySelector('[data-destroy]');
console.log(buttonDestroyEl);

const divBoxesEl = document.querySelector('#boxes');
console.log(divBoxesEl);

function countValueInput(e) {
  const inputCount = Number(inputEl.value);
  console.log(inputCount);
  createBoxes(inputCount);
}

function createBoxes(amount) {
  console.log(amount);

  const array = [];
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    const newBoxes = document.createElement('div');
    console.log(newBoxes);

    newBoxes.style.width = `${width}px`;
    newBoxes.style.height = `${height}px`;
    newBoxes.style.backgroundColor = `${getRandomHexColor()}`;

    array.push(newBoxes);

    width += 10;
    height += 10;
  }

  divBoxesEl.append(...array);
}

function destroyBoxes(amount) {
  console.log(amount);
  for (let i = 1; i <= amount; i += 1) {
    divBoxesEl.removeChild(divBoxesEl.lastElementChild);
  }
}

buttonCreateEl.addEventListener('click', countValueInput);
buttonDestroyEl.addEventListener('click', () => {
  const destroyAmount = Number(inputEl.value);
  destroyBoxes(destroyAmount);
});
