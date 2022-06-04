const ordenedList = document.getElementById('lista-tarefas');
const inputList = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const wipeListButton = document.getElementById('apaga-tudo');
const allLi = document.getElementsByTagName('li');
const wipeCompletedButton = document.getElementById('remover-finalizados');
const saveAllTasks = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removeSelected = document.getElementById('remover-selecionado');

// creating LI as append of ordened list
function createLi() {
  const licreation = document.createElement('li');
  licreation.id = 'ids'
  licreation.innerHTML = inputList.value;
  ordenedList.appendChild(licreation);
}
// reseting value input and returning placeholder as default
function removeInput() {
  inputList.value = '';
}

// events related to task creation [first creation then removing to new input]
taskButton.addEventListener('click', createLi);
taskButton.addEventListener('click', removeInput);

// function to change backgroundColor to grey only one at time
ordenedList.addEventListener('click', (event) => {
  const greyTarget = event.target;
  for (let i = 0; i < allLi.length; i += 1) {
    allLi[i].style.backgroundColor = 'rgb(222, 205, 245)';
    greyTarget.style.backgroundColor = 'rgb(255, 222, 255)';  
    allLi[i].id = '';
    greyTarget.id = 'selected';
    ordenedList.style.backgroundColor = 'rgb(222, 205, 245)';
  }
});

// function dblclick to mark
ordenedList.addEventListener('dblclick', (event) => {
  const targetMark = event.target;
  if (targetMark.className === '') {
    targetMark.className = 'completed';
    targetMark.id = 'ids'
  } else {
    targetMark.className = '';
    targetMark.id = 'ids'
  }
});

// function wipe itens
wipeListButton.addEventListener('click', () => {
  // reference https://www.w3schools.com/jsref/met_node_removechild.asp
  while (ordenedList.hasChildNodes()) {
    ordenedList.removeChild(ordenedList.firstChild);
  }
});

// function remove ONLY completed
wipeCompletedButton.addEventListener('click', () => {
  const completedTask = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTask.length; i += 1) {
    ordenedList.removeChild(completedTask[i]);
  }
});

// function save tasks
saveAllTasks.addEventListener('click', () => {
  // precisava pegar o pai para salvar as informações do innerHTML do
  const workedLi = ordenedList.innerHTML;
  // saveNav é o nome da chave que está salva
  localStorage.saveNav = JSON.stringify(workedLi);
});

// retreaving data
function retreavingData() {
  if (localStorage.saveNav != null) {
    const retreaveLi = JSON.parse(localStorage.saveNav);
    ordenedList.innerHTML = retreaveLi;
  } else;
}
retreavingData();

// moving element up
// reference https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
moveUp.addEventListener('click', () => {
  // condicional para selected ser diferente de null e não ser o primeiro filho do array baseado na ordenedlist
  const selector = document.querySelector('#selected');
  if (selector !== null && selector !== ordenedList.firstChild) {
    ordenedList.insertBefore(selector, selector.previousSibling);
  }
});

// reference https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
moveDown.addEventListener('click', () => {
  const selector = document.querySelector('#selected');
  if (selector !== null && selector !== ordenedList.lastChild) {
    selector.nextSibling.insertAdjacentElement('afterend', selector);
  }
});

// remove selected item
removeSelected.addEventListener('click', () => {
  const selector = document.querySelector('#selected');
  if (selector !== null) {
    selector.remove();
  }
});
