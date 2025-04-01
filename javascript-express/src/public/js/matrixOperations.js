export function sumMatrices(matrix1, matrix2) {
  if (matrix1.length === 0 || matrix2.length === 0) {
    throw new Error('Both matrices must have at least one row.');
  }

  const rows = matrix1.length;
  const cols = matrix1[0].length;

  if (rows !== matrix2.length || cols !== matrix2[0].length) {
    throw new Error('Matrices must have the same dimensions.');
  }

  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return result;
}
