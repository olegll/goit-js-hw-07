function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorBody = document.querySelector('body');
const buttonColor = document.querySelector('.change-color');
const spanText = document.querySelector('.color');

buttonColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  colorBody.style.backgroundColor = newColor;
  spanText.textContent = newColor;
});
