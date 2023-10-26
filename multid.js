const numRows = parseInt(prompt("Enter the number of rows:"));
const numCols = parseInt(prompt("Enter the number of columns:"));

const multiArray = [];

for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    row.push(randomNumber);
  }
  multiArray.push(row);
}

console.log("Multidimensional Array:");
for (let i = 0; i < numRows; i++) {
  console.log(multiArray[i].join("\t"));
}
