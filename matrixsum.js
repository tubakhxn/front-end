// Function to create an empty matrix of size rows x cols
function createEmptyMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(cols).fill(0));
  }
  return matrix;
}

function inputMatrix(rows, cols) {
  const matrix = createEmptyMatrix(rows, cols);
  console.log(`Enter ${rows} rows and ${cols} columns for the matrix:`);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = parseFloat(prompt(`Enter element at row ${i + 1}, column ${j + 1}:`));
    }
  }
  return matrix;
}

// Function to add two matrices
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = createEmptyMatrix(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  return result;
}

const rows = parseInt(prompt("Enter the number of rows for the matrices:"));
const cols = parseInt(prompt("Enter the number of columns for the matrices:"));

const matrixA = inputMatrix(rows, cols);
const matrixB = inputMatrix(rows, cols);

const resultMatrix = addMatrices(matrixA, matrixB);

console.log("Matrix A:");
console.table(matrixA);
console.log("Matrix B:");
console.table(matrixB);
console.log("Resultant Matrix:");
console.table(resultMatrix);
