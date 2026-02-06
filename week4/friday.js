// FRIDAY – Mixed Logic & Thinking Test
// Build a simple calculator using functions.
let a = 5;
let b = 10;

function add() {
    return a + b;
}

console.log(add());

// Write code that checks login and age.
let username = "user1";
let password = "pass123";
let age = 20;

if (username === "user1" && password === "pass123") {
    if (age >= 18) {
        console.log("Login successful and age verified.");
    } else {
        console.log("Login successful but age not allowed.");
    }
} else {
    console.log("Invalid login credentials.");
}

// Write code that calculates total and discount.

let price = 100;
let quantity = 3;
let total = price * quantity;

let discount = 0;
if (total > 200) {
    discount = total * 0.1;
}

let finalTotal = total - discount;
console.log("Final Total:", finalTotal);

// Write a function with a loop inside.
function greetMultipleTimes(name, times) {
    for (let i = 0; i < times; i++) {
        console.log(`Hello, ${name}!`);
    }
}

greetMultipleTimes("Alice", 3);

// Write code that prints grades for scores.
let score = 85; 
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("Score:", score, "→ Grade:", grade);

// Write code that counts pass/fail students.

let scores = [95, 82, 67, 58, 45, 77, 88];

let passCount = 0;
let failCount = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 60) {
        passCount++;
    } else {
        failCount++;
    }
}

console.log("Number of students who passed:", passCount);
console.log("Number of students who failed:", failCount);

// Write code that finds biggest number in array.
let numbers = [45, 82, 67, 58, 101, 77];

let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log("The biggest number is:", biggest);

// Write code that sums all numbers in array.
let numbers = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of numbers:", sum);

// Write code that checks empty input.
let input = []; 

if (input.length === 0) {
    console.log("Input is empty!");
} else {
    console.log("Input has values:", input);
}

// Write code that validates score range.
let score = 75;
if (score >= 0 && score <= 100) {
    console.log("valid score");
}else {
    console.log("invalid score");
}

// Write a calculator that supports + and -.
function calculator(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else {
        return "Invalid operator!";
    }
}
console.log(calculator(5, 3, '+'));
console.log(calculator(5, 3, '-')); 

// Write a function that returns result message.
function getResultMessage(result) {
    return `The result of your calculation is: ${result}`;
}

console.log(getResultMessage(10));

// Write a loop that prints receipt items.
let receipt = ["Milk", "Bread", "Eggs", "Butter"];

for (let i = 0; i < receipt.length; i++) {
    console.log(`${i + 1}. ${receipt[i]}`);
}

// Write code that checks payment status.
let paymentStatus = "paid"; 

if (paymentStatus === "paid") {
    console.log("Payment successful!");
} else {
    console.log("Payment pending. Please pay.");
}

// Write code that calculates tax.
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

console.log(calculateTax(200, 10));

// Write code that checks stock availability.
let stock = 5;
let orderQuantity = 3;

if (orderQuantity <= stock) {
    console.log("Item is available.");
} else {
    console.log("Not enough stock!");
}

// Write code that validates password length.
function validatePassword(password) {
    if (password.length >= 8) {
        return "Password is valid.";
    } else {
        return "Password must be at least 8 characters long.";
    }
}

console.log(validatePassword("mypassword")); 
console.log(validatePassword("123"));

// Write code that repeats action 10 times.
for (let i = 1; i <= 10; i++) {
    console.log(`Action repeated ${i} times`);
}   
// Explain your calculator logic.
Take two numbers and an operator.

Add if +, subtract if -.

Return the result.

// Explain how JS helped you think logically.Write code that validates score range.
JS makes you break problems into steps and make decisions using conditions and functions.

function validateScore(score) {
    return (score >= 0 && score <= 100) ? "Score is valid." : "Score must be 0-100.";
}
