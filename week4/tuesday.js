// # TUESDAY – Conditions & Calculator Logic

// 1. Write a program that checks if a number is positive or negative.

let number = -5;

if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 2. Write a simple calculator that adds two numbers.
let x = 5;
let y = 10;

let sum = x + y;
console.log(sum);

// 3. Write code that checks if a number is even or odd.
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 4. Write an if-else that checks if age ≥ 18.

let age = 18;
if (age >= 18) {
    console.log("adult");
}else {
    console.log("minor");
}

// 5. Write code that prints "Login successful" if `isLoggedIn` is true.
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("login successfully");
}

// 6. Write a calculator that subtracts two numbers.
let a = 20;
let b = 8;
let result = a - b;
console.log(result);
// 7. Predict output:
//    ```js
//   
//    ```
true
// 8. Write code that compares two prices and prints the bigger one.
const priceA = 24.99;
const priceB = 10.30;
if (priceA > priceB) {
    console.log(`the bigger priceA is: ${priceA} `);
}else{
   console.log(`the bigger priceB is: ${priceB} `);
}
// 9. Write a calculator that multiplies two numbers.
let num1 = 10;
let num2 = 20;
let product = num1 * num2;
console.log(product);


// 10. Write code that checks if a number is exactly 10.
let number = 10;
if (number === 10) {
    console.log("The number is exactly 10");
}else{
   console.log("The number is not exactly 10");
}
// 11. Write a condition using `||`.
let color =  "red";
if (color === "red" || color === "orange") {
   console.log("this color is allowed") ;
}
// 12. Write code that prints "Low" if score < 40.
let score = 35;
if (score < 40) {
    console.log("low");
}

// 13. Write a calculator that divides two numbers.
let x = 10;
let y = 5;
let division = x / y;
console.log(division);
// 14. Predict output:
//     ```js
//     let x = 5;
//     if (x % 2 === 0) {
//       console.log("Even");
//     } else {
//       console.log("Odd");
//     }
//     ```
odd
// 15. Write code that checks if username is empty.
let username = "";

if (username === "") {
    console.log("Username field is empty.");
} else {
    console.log("Username is valid.");
}

// 16. Write a condition that checks password length > 6.
let password = "mypassword";
if (password.length > 6) {
    console.log("password is long enough")
}else{
 console.log("password must be more than 6 characters");
}

// 17. Write code that prints grade based on score.
let score = 85;
let grade;
if (score >= 90) {
 grade = "A";
 }else if (score >= 80) {
 grade = "B";
}else if (score >= 70) {
  grade = "C";
}else if (score >= 60) {
 grade = "D";
}else{
    grade = "F";
}

console.log("Your grade is: " + grade);

// 18. Write a calculator that calculates remainder.
let a = 10;
let b = 3;

let remainder = a % b;
console.log(remainder);

// 19. Write code that checks if two numbers are NOT equal.
let a = 10;
let b = 5;
let c= "10";
console.log(a !== b);
console.log(a !== c);
// 20. Explain what if-else does using an example.
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}