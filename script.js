///////////////////////////// DOM Element Variables //////////////////////////////////

const bodyEl = document.body;
const randomColorBtn = document.getElementById("random-color-btn");
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");

// Sets the HTML slider & rgb values according to rgb parameters
function setColorValues(r, g, b) {
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;
  redValue.textContent = r;
  greenValue.textContent = g;
  blueValue.textContent = b;
}

/////////////////////////// Random Color Btn Code ////////////////////////////////////

function randomColor() {
  let r = Math.trunc(Math.random() * 255) + 1;
  let g = Math.trunc(Math.random() * 255) + 1;
  let b = Math.trunc(Math.random() * 255) + 1;
  setColorValues(r, g, b);
  bodyEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
randomColorBtn.addEventListener("click", randomColor);

//////////////////////////// Setting The Background Color //////////////////////////////////

// Default Color RGB Value's
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

// Function To Set Background Color upon parameters
function setBackgroundColor(color, isDefaultColor) {
  if (isDefaultColor) {
    bodyEl.style.backgroundColor = `rgb(${defaultColors[color]})`;
    setColorValues(
      defaultColors[color][0],
      defaultColors[color][1],
      defaultColors[color][2]
    );
  }
  setColorValues(redSlider.value, greenSlider.value, blueSlider.value);
  bodyEl.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
}

// Specifies Which RGB Value Will Become The Default By Rand Generating An Index At defaultColors
const defaultColorIndex = Math.trunc(Math.random() * defaultColors.length) + 1;

// Sets The Default Color of The Page Upon Opening Based Upon The defaultColorIndex Of defaultColor
switch (defaultColorIndex) {
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
    setBackgroundColor(9, true);
}
