// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

const base = Number(prompt("Enter base: "));
const height = Number(prompt("Enter height: "));
let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);

// best practice
if (Number.isNaN(base) || Number.isNaN(height)) {
  alert("Please enter valid numbers for base and height.");
} else {
  area = 0.5 * base * height;
  alert(`The area of the triangle is ${area}`);
}

// 2.  Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let a = Number(prompt("Enter side a:", "Number"));
let b = Number(prompt("Enter side b:", "Number"));
let c = Number(prompt("Enter side c:", "Number"));

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
  alert("Please enter a valid number");
} else {
  const perimeter = a + b + c;
  alert(`The perimeter of the triangle is ${perimeter}`);
}

// best practice
a = Number(prompt("Enter side a:", ""));
b = Number(prompt("Enter side b:", ""));
c = Number(prompt("Enter side c:", ""));

function getPerimeter(a, b, c) {
  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    return "Please enter valid numbers";
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return "The sides do not form a valid triangle";
  }
  return `The perimeter of the triangle is ${a + b + c}`;
}

alert(getPerimeter(a, b, c));

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const length = Number(prompt("Enter length:"));
const width = Number(prompt("Enter width:"));

if (Number.isNaN(length) || Number.isNaN(width)) {
  alert("Please enter a valid number for the length and width.");
} else {
  let area = length * width;
  const perimeter = 2 * (length + width);
  alert(`The area of the rectangle is ${area}`);
  alert(`The perimeter of the rectangle is ${perimeter}`);
}

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = Number(prompt("Enter radius:"));
if (Number.isNaN(radius)) {
  alert("Please enter a valid number for radius");
} else {
  const areaOfCircle = Math.PI * radius * radius;
  const circumferenceOfCircle = 2 * Math.PI * radius;
  alert(`The area of a cicle ${areaOfCircle.toFixed(2)}`);
  alert(`The circumference of a cicle ${circumferenceOfCircle.toFixed(2)}`);
}

//TODO : comeback to 5 to 8
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = Number(prompt("Enter a number for x:"));
let y = Number(prompt("Enter a number for y:"));
let slope = 2;
if (Number.isNaN(x) || Number.isNaN(y)) {
  alert("Please enter a valid number");
} else {
  y = 2 * x - 2;
  alert(y);
}

// best practice
const slopeEquation = 2;
const yIntercept = -2;
const xIntercept = 1;

console.log(`Slope: ${slopeEquation}`);
console.log(`Y-intercept: ${yIntercept}`);
console.log(`X-intercept: ${xIntercept}`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
x = Number(prompt("Enter a number for x:"));
y = Number(prompt("Enter a number for y:"));

console.log((y * 2 - y - 1) / (x * 2 - x * 1));

// best practice.
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slopePoints = (y2 - y1) / (x2 - x1);

console.log(`The slope between (${x1}, ${y1}) and (${x2} is ${slopePoints})`);

// 7. Compare the slope of above two questions.
console.log(
  slopeEquation === slope ? "Both slopes are equal" : "The slopes are different"
);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Equation: y = x^2 + 6x + 9
function calculate(x) {
  return x * x + 6 * x + 9;
}

// Try different x values
console.log(calculate(0));
console.log(calculate(1));
console.log(calculate(-3)); // 0 <--- root
console.log(calculate(2));

// Solve for when y = 0
const root = -3;
console.log(`y is 0 when x = ${root}`);

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = Number(prompt("Please enter the hours:"));
const ratePerHour = Number(prompt("Please enter rate per hour:"));
if (Number.isNaN(hours) || Number.isNaN(ratePerHour)) {
  alert("Please enter the right number");
} else {
  const weeklyEarning = hours * ratePerHour;
  alert(`Your weekly earning is ${weeklyEarning.toFixed(2)}`);
}
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt("Enter your name:");

alert(yourName.length > 7 ? "Your name is long" : "Your name is short");

// best pratice
yourName = prompt("Enter your name:");
if (yourName) {
  alert(`${yourName}, your name is ${yourAge > 7 ? "long" : "short"}`);
} else {
  alert("Your didn't enter a name");
}

// 11. Compare your first name length and your family name length and you should get this output.

let firstName = "Asabeneh";
let lastName = "Yetayeh";

// Your first name, Asabeneh is longer than your family name, Yetayeh
firstName = prompt("Enter your first name:");
lastName = prompt("Enter your last Name:");

if (firstName && lastName) {
  alert(
    `Your first name ${firstName} is ${
      firstName.length > lastName.length ? "longer" : "shorter"
    } than your family name, ${lastName}`
  );
} else {
  alert("You didn't enter a name");
}

firstName = prompt("Enter your first name:");
lastName = prompt("Enter your last Name:");
function compareFirstNameAndLastName(firstName, lastName) {
  if (firstName.length > lastName.length) {
    return `Your first name, ${firstName}, is longer than your family name, ${lastName}.`;
  }
  if (firstName.length === lastName.length) {
    return `Your first name, ${firstName}, is equal in length to your family name, ${lastName}.`;
  }
  if (firstName.length < lastName.length) {
    return `Your first name, ${firstName}, is shorter than your family name, ${lastName}.`;
  }
}

if (firstName && lastName) {
  alert(compareFirstNameAndLastName(firstName, lastName));
} else {
  alert("You didn't enter a name");
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you.`);
// I am 225 years older than you.

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const now = new Date();
const legalDrivingAge = 18;
let birthYear = Number(prompt("Enter birth year:"));
if (Number.isNaN(birthYear) || birthYear >= 1800) {
  alert("Enter a valid date of birth year");
} else {
  const age = now.getFullYear() - birthYear;
  alert(
    `Your are ${age}. ${
      age >= legalDrivingAge
        ? "You are old enough to drive"
        : `You will be allowed to drive after ${legalDrivingAge - age} years.`
    }`
  );
}

// best practice
if (
  Number.isNaN(birthYear) ||
  birthYear < 1800 ||
  birthYear > now.getFullYear()
) {
  alert("Enter a valid birth year.");
} else {
  const age = now.getFullYear() - birthYear;
  alert(
    `You are ${age}. ${
      age >= legalDrivingAge
        ? "You are old enough to drive."
        : `You will be allowed to drive after ${legalDrivingAge - age} years.`
    }`
  );
}

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

const years = Number(prompt("Enter birth year:"));
const secondsInAYear = 365 * 24 * 60 * 60;

if (Number.isNaN(years) || years <= 0) {
  alert("Please enter a valid number of years.");
} else {
  alert(`You will lived ${years * secondsInAYear} seconds.`);
}
// Enter number of years you live: 100
// You lived 3153600000 seconds.

// 15. Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const today = new Date();
console.log(today);
const pad = (num) => String(num).padStart(2, "0");
// ensures the string is at least 2 characters long, padding with "0" at the start if necessary.
const year = today.getFullYear();
const month = pad(today.getMonth() + 1);
const day = pad(today.getDate());
hours = pad(today.getHours());
const minutes = pad(today.getMinutes());

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

console.log(new Intl.DateTimeFormat("en-CA", options).format(today));
console.log(new Intl.DateTimeFormat("en-GB", options).format(today));
console.log(new Intl.DateTimeFormat("de-DE", options).format(today));
