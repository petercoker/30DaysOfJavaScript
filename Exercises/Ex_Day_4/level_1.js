// 1. Get user input using prompt(“Enter your age:”).
// If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

let age = prompt("Enter your age:");
let legalAge = 18;
alert(
  age >= legalAge
    ? "You are old enough to drive."
    : `You are left with ${legalAge - age} years to drive.`
);

// best pratice
const input = prompt("Enter your age:");
age = Number(input); // convert to number

if (Number.isNaN(age)) {
  alert("Please enter a valid number.");
} else if (age >= legalAge) {
  alert("You are old enough to drive.");
} else {
  alert(`You are left with ${legalAge - age} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/*
Enter your age: 30
You are 5 years older than me.
*/

const myAge = Number(prompt("Enter my age:"));
const yourAge = Number(prompt("Enter your age:"));
if (Number.isNaN(myAge) || Number.isNaN(yourAge)) {
  alert("Please enter valid numbers for ages.");
} else if (myAge === yourAge) {
  alert("We are the same age");
} else if (myAge > yourAge) {
  alert(`I am ${myAge - yourAge} years older than you`);
} else {
  alert(`You are ${yourAge - myAge} years older than me.`);
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
/*
  let a = 4
  let b = 3
  4 is greater than 3
*/

let a = 4;
let b = 3;

alert(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/*
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

let number = Number(prompt("Enter a number:"));
alert(
  number % 2 === 0
    ? `${number} is an even number`
    : `${number} is an odd number`
);

if (Number.isNaN(number)) {
  alert("Please enter a valid number.");
} else if (number % 2 === 0) {
  alert(`${number} is an even number`);
} else {
  alert(`${number} is an odd number`);
}

// best practice
input = prompt("Enter a number:");
number = Number(input);
if (Number.isNaN(number)) {
  alert("Please enter a valid number.");
} else if (number % 2 === 0) {
  alert(`${number} is an even number`);
} else {
  alert(`${number} is an odd number`);
}

