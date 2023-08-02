const bodyEl = document.body;
const randomColorBtn = document.getElementById("random-color-btn");
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");

function changeColor(r, g, b) {
  bodyEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function randomColor() {
  let r = Math.trunc(Math.random() * 255) + 1;
  let g = Math.trunc(Math.random() * 255) + 1;
  let b = Math.trunc(Math.random() * 255) + 1;
  redValue.textContent = r;
  greenValue.textContent = g;
  blueValue.textContent = b;
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;
  bodyEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function setSliderValues(r, g, b) {
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;
}
function setBackgroundColor(color, isPleasantColor) {
  if (isPleasantColor) {
    bodyEl.style.backgroundColor = `rgb(${defaultColors[color]})`;
    setSliderValues(
      defaultColors[color][0],
      defaultColors[color][1],
      defaultColors[color][2]
    );
  }
  redValue.textContent = redSlider.value;
  greenValue.textContent = greenSlider.value;
  blueValue.textContent = blueSlider.value;
  bodyEl.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
}
randomColorBtn.addEventListener("click", randomColor);

const defaultColors = [
  [255, 206, 11],
  [232, 63, 104],
  [171, 62, 143],
  [0, 146, 214],
  [0, 169, 137],
  [0, 128, 128],
  [64, 224, 208],
  [211, 255, 206],
  [180, 238, 180],
  [42, 202, 234],
];
const pleasantColorIndex = Math.trunc(Math.random() * 10) + 1;
switch (pleasantColorIndex) {
  case 1:
    setBackgroundColor(0, true);
    break;
  case 2:
    setBackgroundColor(1, true);
    break;
  case 3:
    setBackgroundColor(2, true);
    break;
  case 4:
    setBackgroundColor(3, true);
    break;
  case 5:
    setBackgroundColor(4, true);
    break;
  case 6:
    setBackgroundColor(5, true);
    break;
  case 7:
    setBackgroundColor(6, true);
    break;
  case 8:
    setBackgroundColor(7, true);
    break;
  case 9:
    setBackgroundColor(8, true);
    break;
  case 10:
    setBackgroundCodefaultColors
}
