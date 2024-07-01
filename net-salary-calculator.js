const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePAYE(salary) {
  if (salary <= 24000) {
    return salary * 0.10;
  } else if (salary <= 32333) {
    return 2400 + (salary - 24000) * 0.25;
  } else if (salary <= 500000) {
    return 4475.75 + (salary - 32333) * 0.30;
  } else if (salary <= 800000) {
    return 144150.75 + (salary - 500000) * 0.325;
  } else {
    return 241150.75 + (salary - 800000) * 0.35;
  }
}

function calculateNHIF(salary) {
  if (salary <= 5999) return 150;
  if (salary <= 7999) return 300;
  if (salary <= 11999) return 400;
  if (salary <= 14999) return 500;
  if (salary <= 19999) return 600;
  if (salary <= 24999) return 750;
  if (salary <= 29999) return 850;
  if (salary <= 34999) return 900;
  if (salary <= 39999) return 950;
  if (salary <= 44999) return 1000;
  if (salary <= 49999) return 1100;
  if (salary <= 59999) return 1200;
  if (salary <= 69999) return 1300;
  if (salary <= 79999) return 1400;
  if (salary <= 89999) return 1500;
  if (salary <= 99999) return 1600;
  return 1700;
}

function calculateNSSF(salary) {
    const tier1 = Math.min(7000, salary);
    const tier2 = Math.min(36000, Math.max(0, salary - 7001));
    return tier1 * 0.06 + tier2 * 0.06;
}

function calculateHousingLevy(salary) {
    return salary * 0.015;
}

rl.question('Enter basic salary: ', basicSalaryInput => {
    const basicSalary = parseFloat(basicSalaryInput);
    rl.question('Enter benefits: ', benefitsInput => {
        const benefits = parseFloat(benefitsInput);
        const grossSalary = basicSalary + benefits;

        const paye = calculatePAYE(grossSalary);
        const nhif = calculateNHIF(grossSalary);
        const nssf = calculateNSSF(grossSalary);
        const housingLevy = calculateHousingLevy(grossSalary);

        const totalDeductions = paye + nhif + nssf + housingLevy;
        const netSalary = grossSalary - totalDeductions;

        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`PAYE: ${paye}`);
        console.log(`NHIF: ${nhif}`);
        console.log(`NSSF: ${nssf}`);
        console.log(`Housing Levy: ${housingLevy}`);
        console.log(`Total Deductions: ${totalDeductions}`);
        console.log(`Net Salary: ${netSalary}`);

        rl.close();
    });
});
