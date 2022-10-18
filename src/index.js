import { createSquareMatrix, getTime } from './utils/utils';
import { DEFAULT_FRAME_SIZE, FRAME_SIZES } from './constants/constants';

// vars
const moves = 0;
let time = 0;
let frameSize = DEFAULT_FRAME_SIZE;

// create controls
const control = document.createElement('div');
control.classList.add('control');
document.body.append(control);

const startBtn = document.createElement('input');
startBtn.type = 'button';
startBtn.value = 'Shuffle and start';
control.append(startBtn);

const stopBtn = document.createElement('input');
stopBtn.type = 'button';
stopBtn.value = 'Stop';
control.append(stopBtn);

const saveBtn = document.createElement('input');
saveBtn.type = 'button';
saveBtn.value = 'Save';
control.append(saveBtn);

const resultsBtn = document.createElement('input');
resultsBtn.type = 'button';
resultsBtn.value = 'Results';
control.append(resultsBtn);

// moves and time block
const movesAndTimeBlock = document.createElement('div');
movesAndTimeBlock.classList.add('moves-and-time');

const movesInfo = document.createElement('p');
movesInfo.textContent = `Moves: ${moves}`;
movesAndTimeBlock.append(movesInfo);

const timeInfo = document.createElement('p');
timeInfo.textContent = 'Time: 00:00';

function setTimer() {
  time++;
  timeInfo.textContent = `Time: ${getTime(time)}`;
}

let timer = setInterval(setTimer, 1000);

movesAndTimeBlock.append(timeInfo);
document.body.append(movesAndTimeBlock);

// create board
// add cells in board

function createBoard(mtx, size) {
  const board = document.createElement('div');
  board.classList.add('board');
  document.body.append(board);
  for (let i = 0; i < mtx.length; i++) {
    for (let k = 0; k < mtx[i].length; k++) {
      const cell = document.createElement('div');
      cell.style.width = `${100 / size}%`;
      cell.style.height = `${100 / size}%`;
      cell.classList.add('cell');
      cell.textContent = mtx[i][k] !== 0 ? mtx[i][k] : '';
      board.append(cell);
    }
  }

  // info frame size
  const infoFrameSize = document.createElement('p');
  infoFrameSize.style.paddingTop = '10px';
  infoFrameSize.classList.add('infoFrameSize');
  infoFrameSize.textContent = `Frame size: ${size}x${size}`;
  document.body.append(infoFrameSize);

  // other frames sizes
  const otherSizesBlock = document.createElement('div');
  otherSizesBlock.addEventListener('click', changeBoardSize);
  otherSizesBlock.classList.add('other-size-block');
  otherSizesBlock.textContent = 'Other sizes:';
  FRAME_SIZES.forEach((s) => {
    const link = document.createElement('span');
    link.textContent = `${s}x${s}`;
    link.classList.add('size-link');
    link.id = s;
    otherSizesBlock.append(link);
  });
  document.body.append(otherSizesBlock);
}

const matrix = createSquareMatrix(frameSize);
createBoard(matrix, DEFAULT_FRAME_SIZE);

function createBoardHandler(size) {
  const board = document.querySelector('.board');
  const infoFrameSize = document.querySelector('.infoFrameSize');
  const otherSizesBlock = document.querySelector('.other-size-block');
  otherSizesBlock.remove();
  infoFrameSize.remove();
  board.remove();
  const newMatrix = createSquareMatrix(size);
  clearInterval(timer);
  time = 0;
  timeInfo.textContent = 'Time: 00:00';
  createBoard(newMatrix, size);
  timer = setInterval(setTimer, 1000);
}

// shuffle and start handler
startBtn.addEventListener('click', () => createBoardHandler(frameSize));

// stop timer
stopBtn.addEventListener('click', () => clearInterval(timer));

// change board size
function changeBoardSize(eo) {
  eo = eo || window.event;
  if (!eo.target.id) return;
  frameSize = +eo.target.id;
  createBoardHandler(frameSize);
}
