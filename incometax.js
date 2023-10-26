// Function to calculate income tax based on slabs
function calculateIncomeTax(salary) {
    let tax = 0;
    
    if (salary <= 250000) {
        tax = 0;
    } else if (salary <= 500000) {
        tax = (salary - 250000) * 0.05;
    } else if (salary <= 1000000) {
        tax = 250000 * 0.05 + (salary - 500000) * 0.2;
    } else {
        tax = 250000 * 0.05 + 500000 * 0.2 + (salary - 1000000) * 0.3;
    }
    
    return tax;
}

// Function to calculate final in-hand salary
function calculateInHandSalary(basicSalary, allowances) {
    const totalAllowances = Object.values(allowances).reduce((acc, val) => acc + val, 0);
    const taxableIncome = basicSalary + totalAllowances;
    const incomeTax = calculateIncomeTax(taxableIncome);
    const inHandSalary = taxableIncome - incomeTax;

    return inHandSalary;
}

// Input from the user
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const hraPercentage = parseFloat(prompt("Enter the percentage of HRA:"));
const medicalPercentage = parseFloat(prompt("Enter the percentage of medical allowance:"));
const homePercentage = parseFloat(prompt("Enter the percentage of home allowance:"));

// Create an object to store allowances
const allowances = {
    HRA: (hraPercentage / 100) * basicSalary,
    Medical: (medicalPercentage / 100) * basicSalary,
    Home: (homePercentage / 100) * basicSalary,
};

// Calculate and display the final in-hand salary
const inHandSalary = calculateInHandSalary(basicSalary, allowances);
console.log("Your final in-hand salary after tax deductions is: " + inHandSalary.toFixed(2));