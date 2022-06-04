window.onload = () => {};

const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImageContainer = document.getElementById('meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const buttonImgContainer = document.querySelector('#button-img');
const img = document.querySelector('#meme-image');

// function to show text in center of img 'meme'
textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});

// colour stylization, i could do that in css, but as training i prefer doing here
function colorizingButtons() {
  buttonFire.style.backgroundColor = 'rgb(255, 0, 0)';
  buttonWater.style.backgroundColor = 'rgb(0, 0, 255)';
  buttonEarth.style.backgroundColor = 'rgb(0, 128, 0)';
}

// one event for each button to change border styles
function buttonBorderEvents() {
  buttonFire.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed rgb(255, 0, 0';
  });
  buttonWater.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double rgb(0, 0, 255';
  });
  buttonEarth.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove rgb(0, 128, 0';
  });
}

// Creating auto-select Imgs
function imgAsButton() {
  for (let i = 1; i <= 4; i += 1) {
    const buttonImg = document.createElement('button');
    buttonImg.id = `meme-${[i]}`;
    buttonImg.style.backgroundImage = `url(imgs/meme${[i]}.png)`;
    buttonImg.className = 'images';
    buttonImgContainer.appendChild(buttonImg);
  }
}
imgAsButton();

// verify with instructor Q07
const buttonMeme1 = document.querySelector('#meme-1');
const buttonMeme2 = document.querySelector('#meme-2');
const buttonMeme3 = document.querySelector('#meme-3');
const buttonMeme4 = document.querySelector('#meme-4');

buttonMeme1.addEventListener('click', () => {
  img.src = 'imgs/meme1.png';
  img.alt = 'Catchorro';
});

buttonMeme2.addEventListener('click', () => {
  img.src = 'imgs/meme2.png';
  img.alt = 'willSmith';
});

buttonMeme3.addEventListener('click', () => {
  img.src = 'imgs/meme3.png';
  img.alt = 'orangewtf';
});

buttonMeme4.addEventListener('click', () => {
  img.src = 'imgs/meme4.png';
  img.alt = 'frogma';
});

buttonBorderEvents();
colorizingButtons();