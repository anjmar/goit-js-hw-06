const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

const bodyEl = document.querySelector('body');
function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  spanEl.innerHTML = bgColor;
  bodyEl.style.backgroundColor = `#${bgColor}`;
});
