// # THURSDAY – Loops & Counting Logic

// 1. Write a loop that prints numbers from 1 to 10.
for(let i = 1; i <= 10; i++ ){
    console.log(i);
}

// 2. Write a loop that prints even numbers.
for(let i = 1; i <= 10; i++ ){
    if (i % 2 === 0) {
    console.log(i);
}
}

// 3. Write a loop that prints odd numbers.
for(let i = 1; i <= 10; i++ ){
    if (i % 2 !== 0) {
    console.log(i);
}
}

// 4. Write a loop that sums numbers from 1 to 5.
let sum = 0;
for(i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);

// 5. Write a loop that prints a name 5 times.

let name = "Vina";
for(i = 1; i <= 5; i++){
    console.log(name);
}

// 6. Write a loop that multiplies numbers.
let product = 1;
for(i = 1; i <= 5; i++) {
product = product * i
}
console.log(product);

// 7. Write a loop that prints array values.
let fruits = ["orange","banana", "mango","cherry"];
for(let i = ; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 8. Write a loop that counts backwards.
for(i = 10; i >= 1; i--) {
    console.log(i);
}

// 9. Write a loop that counts total numbers in array.

const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 10. Write a loop that finds largest number.
let numbers = [12, 45, 7, 89, 34, 22];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];  
  }
}

console.log("The largest number is:", largest);
// 11. Predict output:
//     ```js
//     for (let i = 0; i < 3; i++) {
//       console.log(i + 1);
//     }
//     ```
1 
2
3
// 12. Write a loop that calculates total price.
const prices = [10, 20, 30, 40, 50];
    let total = 0;
    for(let i = 0; i < prices.length; i++){
    total += prices[i];
}
console.log("total price:", total);

// 13. Write a loop that prints table of 2.
let i = 1;
while (i <= 10) {
  console.log(`2 x ${i} = ${2 * i}`);
  i++;
}

// 14. Write a loop that checks numbers > 5.
const numbers = [2, 5, 7, 1 ,9 ,3];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i], "is greater than 5");
    }
}

// 15. Write a loop that adds discounts.
const prices = [80, 120, 200, 60];
const discountedPrices = [];

for (const price of prices) {
  if (price > 100) {
    discountedPrices.push(price - price * 0.10);
  } else {
    discountedPrices.push(price);
  }
}

console.log(discountedPrices);

// 16. Write a loop that counts scores above 50.
let scores = [30, 55, 70, 40, 90, 51];
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 50) {
    count++; 
  }
}

console.log("Scores above 50: " + count);
// 17. Write a loop that checks pass/fail.
const scores = [55, 40, 70];
let i = 0;

while (i < scores.length) {
  if (scores[i] >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
  i++;
}
// 18. Write a loop that prints first 5 multiples of 3.
for (let i = 1; i <= 5; i++) {
    console.log(i * 3);
  }

// 19. Write a loop that calculates average.
let numbers = [10, 20, 30, 40, 50]; 
let sum = 0;                       

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];                
}

let average = sum / numbers.length; 
console.log("Average:", average);

// // 20. Explain loops using a real example.
let guests = ["Alice", "Bob", "Charlie", "Diana"];

for (let i = 0; i < guests.length; i++) {
  console.log("Welcome to the party, " + guests[i] + "!");
}