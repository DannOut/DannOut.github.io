const colorPallet = document.querySelector('#color-palette');
const gridCreator = document.getElementById('generate-board');
const ChangeColorsButton = document.querySelector('#generate-id');
const basePixel = document.getElementById('pixel-board');
const selectButton = document.querySelector('#clear-board');

// Random Colors
function randomColors() {
  const red = Math.floor(Math.random() * 255, 10);
  const green = Math.floor(Math.random() * 255, 10);
  const blue = Math.floor(Math.random() * 255, 10);
  return `rgb(${red}, ${green}, ${blue})`;
}

// creatingDiv color with class color
function creatingColors(numberOfPalletColors) {
  // Defining black background as first in all cases
  const color1 = document.createElement('div');
  color1.className = 'color value0 selected';
  color1.style.backgroundColor = 'black';
  colorPallet.appendChild(color1);
  // using repetition to generete random colors
  for (let index = 1; index < numberOfPalletColors; index += 1) {
    const color = document.createElement('div');
    color.className = `color value${[index]}`;
    color.style.backgroundColor = randomColors();
    colorPallet.appendChild(color);
  }
}

// pixel creator
function creatingPixel(size) {
  for (let line = 0; line < size; line += 1) {
    // cria uma div que vai agrupar outras divs, vai ser a linha
    const createLine = document.createElement('div');
    createLine.className = 'line';
    for (let column = 0; column < size; column += 1) {
      // agora dentro da primeira div criada, cria divs do mesmo size para ocupar dentro da div
      const basecolumn = document.createElement('div');
      basecolumn.className = 'pixel';
      // appendchild na div PAI (linha) com os filhos (colunas)
      createLine.appendChild(basecolumn);
    }
    // appendchild das linhas com as colunas dentro no pai que é o board
    basePixel.appendChild(createLine);
  }
}
// check if board size in certain conditions
function boardSize() {
  const inputSize = document.getElementById('board-size');
  if (!inputSize.value) {
    alert('Board inválido!');
    creatingPixel(5);
  } else if (inputSize.value < 5 || inputSize.value <= 0) {
    alert('tamanho mínimo 5 pixels');
    creatingPixel(5);
  } else if (inputSize.value > 50) {
    alert('tamanho máximo 50 pixels');
    creatingPixel(50);
  } else {
    creatingPixel(inputSize.value);
  }
}

function boardSizeEnter() {
  const parentRemove = document.querySelector('#pixel-board');
  // reference https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  while (parentRemove.firstChild) {
    parentRemove.removeChild(parentRemove.firstChild);
  }
  boardSize();
}

gridCreator.addEventListener('click', boardSizeEnter);

// function to reset colors
ChangeColorsButton.addEventListener('click', () => {
  const resetColor = document.getElementsByClassName('color');
  for (let i = 1; i < resetColor.length; i += 1) {
    resetColor[i].style.backgroundColor = randomColors();
  }
});

// function to manage events of class locations
function selectColor(event) {
  const color = document.getElementsByClassName('color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
// event to use selectColor on color that is clicked
function colors() {
  const colorEvent = document.getElementsByClassName('color');
  for (let index = 0; index < colorEvent.length; index += 1) {
    colorEvent[index].addEventListener('click', selectColor);
  }
}
// getting the selected color and using event to print it in pixel
function printColor(event) {
  const mainColorFunction = document.querySelector('.selected');
  // tava colocando um selected global, por isso só estava pegando a cor preta.
  const print = event.target;
  const defineColor = window
    .getComputedStyle(mainColorFunction)
    .getPropertyValue('background-color');
  if (print.className === 'pixel') {
    print.style.backgroundColor = defineColor;
  } else;
}
basePixel.addEventListener('click', printColor);

// reset all squares to blank when clicked
function resetSquare() {
  const allPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
}

selectButton.addEventListener('click', resetSquare);

// windows onload
window.onload = () => {
  // defining number of pallet Colors
  creatingColors(4);
  colors();
};
