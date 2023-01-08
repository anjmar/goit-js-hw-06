const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

for (let ingredient of ingredients) {
  const ingredItemElem = document.createElement('li');

  ingredItemElem.classList.add('item');
  ingredItemElem.textContent = `${ingredient}`;
  console.log(ingredItemElem);

  const itemEl = document.querySelector('#ingredients');
  itemEl.appendChild(ingredItemElem);
}
