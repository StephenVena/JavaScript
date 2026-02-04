// # WEDNESDAY – Functions & Real Logic Tasks

// 1. Write a function that adds two numbers.

function add (a,  b) {
    return a + b;
}
let result = add(5, 8);
console.log(result);

// 2. Write a function that subtracts two numbers.
function substract (x,  y) {
    return x - y;
}
console.log(substract(8, 6));

// 3. Write a function that multiplies two numbers.
function multiply (a,  b) {
    return a * b;
}
console.log(multiply(10, 5));

// 4. Write a function that divides two numbers.

function divides(x,  y) {
    return x / y;
}
console.log(divides (10, 2));
// 5. Write a calculator function that returns sum.
function calculateSum(num1,  num2) {
    return num1 + num2;
}
console.log(calculateSum (5, 10));

// 6. Write a function that checks if a number is even.
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7));
   
// 7. Write a function that checks if a number is odd.
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(3)); 
console.log(isOdd(10));

// 8. Write a function that returns the bigger number.
function bigger(a, b) {
    if(a > b) {
    return a;
}else{
    return b;
}
  }
  console.log(bigger(5, 10)); 
  console.log(bigger(20, 15)); 

// 9.Write a function that converts minutes to seconds.
function minutesToSeconds(minutes) {
    return minutes * 60;
}
console.log(minutesToSeconds(5)); 
console.log(minutesToSeconds(10));

// 10. Write a function that calculates total price.

// 11. Predict output:
//     ```js
//     function test(x) {
//       return x + 2;
//     }
//     console.log(test(3));
//     ```
5
// 12. Write a function that checks pass/fail.
function checkPass(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkPass(65)); 
console.log(checkPass(40));

// 13. Write a function that checks login status.
function checkLogin(isLoggedIn) {
    if (isLoggedIn) {
        return "User is logged in";
    } else {
        return "User is not logged in";
    }
}

console.log(checkLogin(true));
console.log(checkLogin(false));

// 14. Write a function that calculates discount.
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log(calculateDiscount(1000, 10)); 
console.log(calculateDiscount(500, 20)); 

// 15. Write a function that checks if age is valid.
function isValidAge(age) {
    if (age >= 0 && age <= 120) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidAge(25)); 
console.log(isValidAge(150));
// 16. Write a function that returns square of a number.
function square(num) {
    return num * num;
}

console.log(square(5)); 
console.log(square(10));

// 17. Write a function that returns area of rectangle.
function rectangleArea(length, width) {
    return length * width;
}

console.log(rectangleArea(5, 10)); 
console.log(rectangleArea(7, 3));

// 18. Write a function that returns sum of 3 numbers.
function sumThree(a, b, c) {
    return a + b + c;
}

console.log(sumThree(5, 10, 15)); 
console.log(sumThree(1, 2, 3));  

// 19. Explain why functions are useful.
Functions are useful because they let you reuse code,
 organize your program, and make it easier to read and manage.

// 20. Explain `return` in simple words.
return gives a value back from a function.