function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');

const createButton = document.querySelector('button[data-create]');

const cleanButton = document.querySelector('button[data-destroy]');

const divBox = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++){
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor()
    elements.push(divEl);
    size += 10;
  }
  divBox.innerHTML = '';
  divBox.append(...elements);

}

function cleanBox() {
  divBox.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const count = Number(inputEl.value);

  if (count >= 1 && count <= 100) {
    createBoxes(count);
    inputEl.value = '';
  }
});

cleanButton.addEventListener('click', cleanBox);






