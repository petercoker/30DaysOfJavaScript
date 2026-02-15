// Still learning - Arrow funcion

// 1. Declare a function _fullName_ and it print out your full name.

// function _fullName_() {
//   console.log("Peter Sonola Coker");
// }

// console.log(_fullName_());

// // best practice
// // 1. Use camelCase for the name
// // 2. Return the value instead of just logging it (more flexible)
// function getFullName() {
//   const firstName = "Peter";
//   const middleName = "Sonola";
//   const lastName = "Coker";
//   return `${firstName} ${middleName} ${lastName}`;
// }

// // Now you can choose to log it, or do something else with it!
// console.log(getFullName());

// 2.Declare a function _fullName_ and now it takes firstName,
// lastName as a parameter and it returns your full - name.

function _fullName_(firstName, lastName) {
  return firstName + lastName;
}

console.log(_fullName_("Peter", "Coker"));

// best practice
// 1. Use camelCase naming (standard JS practice)
// 2. Use Template Literals for clean spacing
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Peter", "Coker")); // Output: "Peter Coker"

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(getFullName("Peter", "Coker"));

// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.

function _addNumbers_(num1, num2) {
  return num1 + num2;
}

console.log("_addNumbers_:", _addNumbers_(2, 2));

// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function getAreaOfRectangle(length, width) {
  return length * width;
}

console.log("getAreaOfRectangle:", getAreaOfRectangle(2, 2));

// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_.
// Write a function which calculates _perimeterOfRectangle_.

function _perimeterOfRectangle_(length, width) {
  return 2 * (length + width);
}

console.log("_perimeterOfRectangle_:", _perimeterOfRectangle_(2, 2));

// Function with many parameters.
function organizeParty(host, coHost, ...h) {
  console.log("The Host is:", host);
  console.log("The Co-Host is:", coHost);
  console.log("The Guest List array is:", h);
}

// Calling the function
organizeParty("Peter", "Sarah", "John", "Kelly", "Jack", "Jill");

console.log("_perimeterOfRectangle_:", _perimeterOfRectangle_(2, 2));

function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);

// 6. A volume of a rectangular prism is calculated as
// follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.

function _volumeOfRectPrism_(length, width, height_) {
  return length * width * height_;
}

console.log("_volumeOfRectPrism_:", _volumeOfRectPrism_(2, 2, 2));

//best practice
// 1. Use camelCase naming (no underscores)
// 2. Use clear, standard parameter names
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// 3. Use Template Literals for the output
const l = 2,
  w = 2,
  h = 2;
console.log(`The volume is: ${volumeOfRectPrism(l, w, h)}`);

// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_

// function getAreaOfCircle(radius) {
//   return Math.PI * radius * radius;
// }

// console.log("getAreaOfCircle:", getAreaOfCircle(2));

//best practice
function getAreaOfCircle(radius) {
  // Use ** 2 for "squared"
  return Math.PI * radius ** 2;
}

console.log(`Area of Circle: ${getAreaOfCircle(2)}`);

const area = getAreaOfCircle(2);
console.log(area.toFixed(2)); // "12.57"

// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_.
// Write a function which calculates _circumOfCircle_
function getCircumference(radius) {
  if (radius < 0) return "Radius cannot be negative";
  return 2 * Math.PI * radius;
}

console.log("getCircumference:", getCircumference(2));

// 9. Density of a substance is calculated as follows:_density= mass/volume_.
// Write a function which calculates _density_.

function getDensity(mass, volume) {
  // Defensive check: You can't divide by zero!
  if (volume === 0) return "Volume cannot be zero";
  return mass / volume;
}

const density = getDensity(4, 2);

console.log(`Area of Density: ${getDensity(4, 0)}`);

// In real-world science applications, density usually comes with units (like kg/m³ or g/cm³).
// To make your function even better, you could include the units in your return string:
console.log(`Density: ${density} kg/m³`);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, _speed_.
function getDistance(speed, time) {
  return speed * time;
}

console.log(`Distance: ${getDistance(120, 20)}`);

// best practice
// 1. Rename to match the actual goal
function getSpeed(distance, time) {
  // 2. Defensive check: Time cannot be zero (division by zero error)
  if (time === 0) return "Time cannot be zero";

  return distance / time;
}

const distance = 120;
const time = 20;
const speed = getSpeed(distance, time);

// 3. Use descriptive labels in your logs
console.log(`Speed: ${speed} km/h`);

// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
function getWeight(mass, gravity) {
  // Defensive check: Mass and gravity cannot be negative or zero
  if (mass <= 0 || gravity <= 0)
    return "Mass and gravity must be positive values";

  return mass * gravity;
}

const mass = 10;
const gravity = 9.8;
const weight = getWeight(mass, gravity);

console.log(`Weight: ${weight.toFixed(2)} N`);

// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.

function convertCelsiusToFahrenheit(celsius) {
  /**
   * Converts Celsius temperature to Fahrenheit.
   *
   * The conversion formula is:
   * 1. Multiply the Celsius value by 9/5.
   * 2. Add 32 to the result of the multiplication.
   *
   * @param {number} celsius - The temperature in Celsius to be converted.
   * @returns {number} The equivalent temperature in Fahrenheit.
   */
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const boilingPointC = 100;
console.log(
  `${boilingPointC}°C is ${convertCelsiusToFahrenheit(boilingPointC)}°F`,
);
// Output: 100°C is 212°F

// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

// - The same groups apply to both men and women.
// - _Underweight_: BMI is less than 18.5
// - _Normal weight_: BMI is 18.5 to 24.9
// - _Overweight_: BMI is 25 to 29.9
// - _Obese_: BMI is 30 or more

/**
 * Calculates BMI and returns the weight category
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in meters
 * @returns {string} BMI value and category
 */
function calculateBmi(weight, height) {
  // Defensive checks
  if (weight <= 0 || height <= 0) {
    return "Weight and height must be positive values";
  }

  const bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `BMI: ${bmi.toFixed(1)}, Category: ${category}`;
}

// Test the function
console.log(calculateBmi(70, 1.75)); // Normal weight
console.log(calculateBmi(55, 1.75)); // Underweight
console.log(calculateBmi(85, 1.75)); // Overweight
console.log(calculateBmi(95, 1.75)); // Obese

// 14. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array.
// If the array length is less than five it return 'item not found'.

// Write a function called _modifyArray_ takes array as parameter
// and modifies the fifth item of the array
// and return the array.
// If the array length is less than five it return 'item not found'.

const arr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// const index = 5;
// const value = "5th Item changed";
function modifyFiveElementOfArray(array) {
  if (array.length <= 5) {
    return "item not found";
  }
  for (let index = 0; index < array.length; index++) {
    // 4 is the 5th item
    if (index === 4) {
      array[index] = "5th";
    }
  }
  return array;
}

const result = modifyFiveElementOfArray(arr);

console.log(result);

function modifyArray(array) {
  // 1. Correct the condition: length must be at least 5
  if (array.length < 5) {
    return "item not found";
  }

  // 2. Create a copy to avoid "Side Effects" (Best Practice)
  const newArray = [...array];

  // 3. Direct modification (No loop needed!)
  // newArray[4] = newArray[4].toUpperCase(); // Example modification
  newArray[4] = "5th element changed"; // Example modification

  return newArray;
}

// Testing the code
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
];
console.log(modifyArray(countries));

// 15. Write a function called _isPrime_,
// which checks if a number is prime number.
function isPrime(num) {
  if (num <= 1) return false; // 0, 1, and negatives are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // even numbers > 2 are not prime

  // check odd divisors up to √num
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// 16. Write a functions which checks if all items are unique in the array.
function getUniqueArray(arr) {
  return [...new Set(arr)];
}

const arr1 = [2019, 2020, 2019, 2018, 2020, 2021, 2030, 2020, 2019];

console.log(getUniqueArray(arr1));


function isAllUnique(arr) {
  // A Set only keeps unique values.
  // If the sizes match, everything was unique!
  return new Set(arr).size === arr.length;
}


const arr2 = [2019, 2020, 2019, 2018];

console.log(isAllUnique(arr1)); // true
console.log(isAllUnique(arr2)); // false

