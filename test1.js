// 1st text base, basic input-INR, 2nd= DA=80% HRA 30% TA 20%. Male & Female income, tax calculator 
let income = parseFloat(prompt("Enter your income in INR:"));
let gender = prompt("Enter your gender (male/female):");

let da = income * 0.8;
let hra = income * 0.3;
let ta = income * 0.2;
let total_income = income + da + hra + ta;

let tax_rate;
if (gender.toLowerCase() === "male") {
  if (total_income > 500000) {
    tax_rate = 0.2;
  } else if (total_income > 250000) {
    tax_rate = 0.1;
  } else {
    tax_rate = 0;
  }
} else if (gender.toLowerCase() === "female") {
  if (total_income > 500000) {
    tax_rate = 0.15;
  } else if (total_income > 250000) {
    tax_rate = 0.05;
  } else {
    tax_rate = 0;
  }
}

let tax = total_income * tax_rate;

console.log(`Your total income is INR ${total_income.toFixed(2)}`);
console.log(`Your tax is INR ${tax.toFixed(2)}`);