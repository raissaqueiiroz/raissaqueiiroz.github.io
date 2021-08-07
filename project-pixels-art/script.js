// Definia a cor preta como cor inicial.
function selectedBlack() {
  const initialSelected = document.querySelector('.color-black');
  initialSelected.classList.add('selected');
}

// A cor inicial dos "pixels" dentro do quadro, ao abrir a página,
// deve ser branca;
function initialPixelColor(color) {
  const initialPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < initialPixel.length; i += 1) {
    initialPixel[i].style.background = color;
  }
}

// Selecione uma das cores da paleta, ao clicar, a cor selecionada é
// a que será utilizada para preencher os pixels no quadro.
function selectedColor() {
  const arrayColorPalette = document.querySelector('#color-palette');
  const arrayColors = document.getElementsByClassName('color');
  arrayColorPalette.addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
      for (let i = 0; i < arrayColors.length; i += 1) {
        arrayColors[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  });
}

selectedColor();

// Pintando os pixels em .pixel-board de acordo com o elemento cuja classe seja .selected.
function pixelSelected() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('pixel')) {
      const pixelSelect = document.querySelector('.selected');
      const backgroundChange = window.getComputedStyle(pixelSelect).backgroundColor;
      e.target.style.backgroundColor = backgroundChange;
    }
  });
}

pixelSelected();

// Botão limpa pixels.
function clearBoard() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click', () => {
    initialPixelColor('white');
  });
}

clearBoard();

// Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
function boardSize() {
  const buttonVqv = document.querySelector('#generate-board');
  buttonVqv.addEventListener('click', () => {
    let input = document.querySelector('#board-size').value;
    let valueInput = parseInt(input);
    if (valueInput < 5) {
     valueInput = 5;
    } else if (valueInput > 50) {
      valueInput = 50;
    }
    const sessions = document.querySelectorAll('section');
    if (input === ''){
      alert ("Board inválido!");
    } else {
      for (let i = 0; i < sessions.length; i += 1) {
        sessions[i].remove();
      } for (let i = 0; i < valueInput; i += 1){
        const newContainer = document.querySelector('#pixel-board');
        const lines = document.createElement('section');
        lines.classList.add('lines');
        newContainer.appendChild(lines);
        lines.style.backgroundColor = 'white';
        for (let i = 0; i < valueInput; i += 1){
          const collums = document.createElement('div');
          collums.classList.add('pixel');
          lines.appendChild(collums);
          collums.style.backgroundColor = 'white';
        }
      }
    }
  });
}

boardSize();

// let corR = Math.random() * 255;
// let corG = Math.random() * 255;
// let corB = Math.random() * 255;


// //Gerando cores aleatoriamente.
// function generateColors() {
//   for(let index = 0; index < 3; index += 1) {
//     const divPalette = document.querySelector('#color-palette');
//     const createColor = document.createElement('div');
//     createColor.classList.add('color');
//     divPalette.appendChild(createColor);
//     createColor.style.backgroundColor = rgb(corR, corG, corB);
//   }
// }

// Ao carregar a página
window.onload = function () {
  selectedBlack();
  initialPixelColor('white');
  selectedColor();
  generateColors();
};
