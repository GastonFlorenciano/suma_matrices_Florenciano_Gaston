import { validateInput, validateMatrixDimensions } from './validation.js';
import { sumMatrices } from './matrixOperations.js';

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateMatrices');
  const calculateBtn = document.getElementById('calculateSum');
  const matrixInputsDiv = document.getElementById('matrixInputs');
  const resultArea = document.getElementById('result');

  // Evento para generar matrices
  generateBtn.addEventListener('click', () => {
    const rowsValue = document.getElementById('rows').value;
    const columnsValue = document.getElementById('columns').value;

    const validation = validateMatrixDimensions(rowsValue, columnsValue);

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    const rows = parseInt(rowsValue);
    const cols = parseInt(columnsValue);

    // Generar inputs para matrices
    generateMatrixInputs(rows, cols);

    // Mostrar botón de calcular
    calculateBtn.style.display = 'block';
  });

  // Evento para calcular suma
  calculateBtn.addEventListener('click', () => {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('columns').value);

    try {
      const matrix1 = getMatrixInput('matrix1', rows, cols);
      const matrix2 = getMatrixInput('matrix2', rows, cols);

      const resultMatrix = sumMatrices(matrix1, matrix2);
      displayResult(resultMatrix);
    } catch (error) {
      alert(error.message);
    }
  });

  // Función para generar los inputs de las matrices
  function generateMatrixInputs(rows, cols) {
    matrixInputsDiv.innerHTML = '';

    // Crear matriz 1
    const matrix1Div = document.createElement('div');
    matrix1Div.className = 'matrix-container';
    matrix1Div.innerHTML = '<h3>Matriz 1</h3>';

    for (let i = 0; i < rows; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'matrix-row';

      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `matrix1-${i}-${j}`;
        input.className = 'matrix-input';
        rowDiv.appendChild(input);
      }

      matrix1Div.appendChild(rowDiv);
    }

    // Crear matriz 2
    const matrix2Div = document.createElement('div');
    matrix2Div.className = 'matrix-container';
    matrix2Div.innerHTML = '<h3>Matriz 2</h3>';

    for (let i = 0; i < rows; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'matrix-row';

      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `matrix2-${i}-${j}`;
        input.className = 'matrix-input';
        rowDiv.appendChild(input);
      }

      matrix2Div.appendChild(rowDiv);
    }

    matrixInputsDiv.appendChild(matrix1Div);
    matrixInputsDiv.appendChild(matrix2Div);
  }

  // Función para obtener los valores de la matriz
  function getMatrixInput(matrixId, rows, cols) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const inputElement = document.getElementById(`${matrixId}-${i}-${j}`);
        if (!inputElement) {
          throw new Error(
            `No se encontró el elemento con id ${matrixId}-${i}-${j}`
          );
        }

        const value = inputElement.value.trim();
        if (value === '') {
          throw new Error('Todos los campos deben estar completos');
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
          throw new Error('Todos los valores deben ser números');
        }

        row.push(numValue);
      }
      matrix.push(row);
    }

    return matrix;
  }

  // Función para mostrar el resultado
  function displayResult(matrix) {
    resultArea.innerHTML = '<h3>Matriz Resultante:</h3>';

    const resultTable = document.createElement('table');
    resultTable.className = 'result-table';

    matrix.forEach((row) => {
      const tableRow = document.createElement('tr');

      row.forEach((cell) => {
        const tableCell = document.createElement('td');
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      });

      resultTable.appendChild(tableRow);
    });

    resultArea.appendChild(resultTable);
  }
});
