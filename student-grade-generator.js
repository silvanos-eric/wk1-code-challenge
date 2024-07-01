const readline = require('readline');

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate grade
function calculateGrade(marks) {
  if (marks > 79) {
    return 'A';
  } else if (marks >= 60) {
    return 'B';
  } else if (marks >= 50) {
    return 'C';
  } else if (marks >= 40) {
    return 'D';
  } else {
    return 'E';
  }
}

// Prompt user for input
rl.question('Please enter student marks (0-100): ', (input) => {
  const marks = parseInt(input);

  // Check if the input is a valid number within the specified range
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = calculateGrade(marks);
    console.log(`The student's grade is: ${grade}`);
  } else {
    console.log('Invalid input. Please enter a number between 0 and 100.');
  }

  // Close the readline interface
  rl.close();
});
