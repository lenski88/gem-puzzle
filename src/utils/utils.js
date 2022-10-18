function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const createSquareMatrix = (n) => {
  const matrix = [];
  const values = Array.from({ length: n * n }, (v, i) => i);
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let k = 0; k < n; k++) {
      const idx = getRandomNumber(0, values.length);
      matrix[i][k] = values[idx];
      values.splice(idx, 1);
    }
  }
  return matrix;
};

export const getTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const sec = seconds - mins * 60;
  return `${mins.toString().length === 1 ? `0${mins}` : mins}:${sec.toString().length === 1 ? `0${sec}` : sec}`;
};
