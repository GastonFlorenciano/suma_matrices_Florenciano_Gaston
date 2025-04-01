function validateInput(input) {
  // Check if input is empty
  if (input.trim() === '') {
    return { valid: false, message: 'Este campo no puede estar vacío.' };
  }

  // Check if input is a number
  if (isNaN(input)) {
    return { valid: false, message: 'Por favor, ingrese un número válido.' };
  }

  return { valid: true, message: '' };
}

export function validateMatrixDimensions(rows, cols) {
  const rowValidation = validateInput(rows);
  const colValidation = validateInput(cols);

  if (!rowValidation.valid) {
    return rowValidation;
  }

  if (!colValidation.valid) {
    return colValidation;
  }

  const numRows = parseInt(rows);
  const numCols = parseInt(cols);

  if (numRows <= 0 || numCols <= 0) {
    return {
      valid: false,
      message: 'Las dimensiones de la matriz deben ser mayores que cero.',
    };
  }

  return { valid: true, message: '' };
}
