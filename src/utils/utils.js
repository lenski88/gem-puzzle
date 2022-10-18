function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const createSquareMatrix = (n) => {
  const matrix = [];
  const values = Array.from({ length: n * n }, (v, i) => i);
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let k = 0; k < n; k++) {
      const idx = getRandomNumber(0, values.length - 1);
      matrix[i][k] = values[idx];
      values.splice(idx, 1);
    }
  }
  return matrix;
};
