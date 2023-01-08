const sumItems = document.querySelectorAll('.item');
console.log('Number of categories:', sumItems.length);

for (let item of sumItems) {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
}
