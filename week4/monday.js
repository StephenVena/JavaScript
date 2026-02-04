// # MONDAY – Variables, Data & Simple Logic

// 1. Create a variable `a = 5` and `b = 3`. Write code to print their sum.
let a = 5;
let b = 3;
let sum = a + b;
console.log(sum);

// 2. Write a program that stores a user's age and prints it.
let age = 30;
console.log("User's age is:", age);

// 3. Write code to swap values of two variables.
let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(`a is ${a}, b is ${b}`);

// 4. Create an array of 3 prices and print the first one.
const prices = [10.24, 20.10, 30.40];
console.log("the first price is:" , prices[0]);

// 5. Create an object for a product with name and price.
const product = {
    name: "laptop",
    price: 999.99
    };
    console.log(product);

// 6. Predict the output:
//    ```js
//    let x;
//    console.log(x + 5);
//    ```
NaN
// 7. Write code that checks if a number is greater than 10.
let number = 15;
if (number > 10) {
console.log("the number is greater than 10");
}else{
   console.log("the number is 10 or less");
}

// 8. Write a variable that stores whether a light is ON or OFF.
let lighton = true;
console.log(lighton);

// 9. Convert this sentence into a string variable.
let sentence = "this is my sentence stored as a string";
console.log(sentence);

// 10. Write code that adds two numbers stored in variables.
let x = 50
let y = 20;
let sum = x + y;
console.log(sum);
// 11. Predict output:
//     ```js
//     let x = "5";
//     let y = 2;
//     console.log(x + y);
//     ```
52
// 12. Write code that calculates the total of 3 numbers.
let a = 10;
let b = 20;
let c = 30;
let total = a + b + c;
console.log(total);
// 13. Store today's day as a string.
let today ="monday";
console.log(today);
// 14. Write code that checks if two numbers are equal.
let x = 5;
let y = 5;
if (x === y) {
  console.log("the number are equal");
}else{
console.log("the number are not equal");
}

// 15. Write a variable that stores a student score.

// 16. What is the output?
//     ```js
//     let score = 80;
//     score = score + 5;
//     console.log(score);
//     ```
85

// 17. Write code that prints "Pass" if score > 50.
let score = 65;
if (score > 50) {
console.log("pass");
}

// 18. Write code that subtracts two numbers.
let x = 10;
let y = 20;
console.log(x - y);

// 19. Write code that multiplies two numbers.
let a =  20;
let b = 30;
console.log(a * b);
// 20. Explain in one sentence what a variable is.
A variable is a name used to store and keep data in a program.