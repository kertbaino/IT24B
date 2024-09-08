// Data types
const a = 1;
const b = 5;

const name = "hahaha";
const char = 'a';

// Arithmetic operations
const minus = a - b;
console.log('Subtraction:', minus);

const sum = a + b;
console.log('Addition:', sum);

const multiply = a * b;
console.log('Multiplication:', multiply);

// Check for division by zero before performing division
if (b !== 0) {
    const divide = a / b;
    console.log('Division:', divide);
} else {
    console.log("Error: Division by zero is not allowed.");
}

// Conditional statements
const age = 16;
const ageStatus = age >= 18 ? "Adult" : "Minor";
console.log(ageStatus);

// Switch case statement
const buangna = 'B';

switch (buangna) {
    case 'A':
        console.log('Action A');
        break;
    case 'B':
        console.log('Action B');
        break;
    case 'C':
        console.log('Action C');
        break;
    case 'D':
        console.log('Action D');
        break;
    default:
        console.log('Default Action');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log('For Loop:', i);
}

let j = 0;
while (j < 5) {
    console.log('While Loop:', j);
    j++;
}

// Function to check if a number is odd or even
const checkOddEven = (num) => num % 2 === 0 ? `${num} is even` : `${num} is odd`;

console.log(checkOddEven(4));
console.log(checkOddEven(7));
