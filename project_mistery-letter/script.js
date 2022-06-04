const inputMailText = document.querySelector('#carta-texto');
const buttonCreateText = document.querySelector('#criar-carta');
const generateMail = document.querySelector('#carta-gerada');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];
const somaContador = document.querySelector('#carta-contador');

/* ///////////////\\\\\\\\\\\\\\\\\\ */

// RANDOM VALUES
// // RANDOMIC FUNCTION
function randomStyleorSize() {
  return Math.floor(Math.random() * 3, 10);
}

function randomRotateSkew() {
  return Math.floor(Math.random() * 2, 10);
}
randomStyleorSize();
// // RANDOM STYLE
function randomStyle() {
  const x = randomStyleorSize();
  return style[x];
}
// // RANDOM SIZE
function randomSize() {
  const x = randomStyleorSize();
  return size[x];
}
// // END RANDOM STYLE AND SIZE
/* ///////////////\\\\\\\\\\\\\\\\\\ */
// // RANDOM ROTATE
function randomRotate() {
  const x = randomRotateSkew();
  return rotate[x];
}
// // RANDOM SKEW
function randomSkew() {
  const x = randomRotateSkew();
  return skew[x];
}
// // END RANDOM ROTATE AND SKEW

// AUTO-CLASS IMPLEMENTATION
function autoClass(param) {
  param.classList.add(
    randomStyle(),
    randomSize(),
    randomRotate(),
    randomSkew(),
  );
}

// function to createspan and return case empty
// check why the last two are not working
function createSpan() {
  let contador = 0;
  const trimmedText = inputMailText.value.trim();
  if (!trimmedText) {
    generateMail.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    generateMail.innerHTML = ' ';
    const textbroken = trimmedText.split(' ');
    for (let i = 0; i < textbroken.length; i += 1) {
      const createSpanText = document.createElement('span');
      contador += 1;
      somaContador.innerHTML = contador;
      autoClass(createSpanText);
      createSpanText.innerHTML = textbroken[i];
      generateMail.appendChild(createSpanText);
    }
  }
}

// button responsible to povoate P as span
buttonCreateText.addEventListener('click', createSpan);

// when clicked random class

generateMail.addEventListener('click', (event) => {
  const test = event.target;
  test.className = '';
  autoClass(test);
});

// daniel outeiro dos santos