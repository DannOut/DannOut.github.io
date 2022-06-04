const divColor = document.getElementsByClassName('ball');
const answerText = document.getElementById('answer');
const ballSection = document.querySelector('.ball-sect');
const rgbSetup = document.getElementById('rgb-color');
const resetBtn = document.getElementById('reset-game');
const spanScore = document.getElementById('score');
let score = 0;

// calculo do score
function calcScore() {
  const win = score + 3;
  score = win;
  console.log(score);
  return score;
}

// responsável por gerar cores automáticas
function randomColor() {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `${red} ,${green}, ${blue}`;
}
// definindo cor a cada div
function defineColor() {
  for (let index = 0; index < divColor.length; index += 1) {
    const oneColor = divColor[index];
    oneColor.style.backgroundColor = `rgb(${randomColor()})`;
  }
  const colorWorked = divColor[parseInt(Math.random() * 6, 10)];
  rgbSetup.innerText = colorWorked.style.backgroundColor;
}

// criando o evento de target e dizendo se acertou ou não
function answerTag(event) {
  const myTarget = event.target.style.backgroundColor;
  const targetSplit = myTarget.split('rgb');
  const value = rgbSetup.innerText.split('rgb');
  if (value[1] === targetSplit[1]) {
    answerText.innerText = 'Acertou!';
    spanScore.innerText = `Placar: ${calcScore()}`;
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
  return answerText;
}
ballSection.addEventListener('click', answerTag);

// começa um novo jogo
resetBtn.addEventListener('click', () => {
  answerText.innerText = 'Escolha uma cor';
  defineColor();
});

// windows onload
window.onload = () => {
  defineColor();
};