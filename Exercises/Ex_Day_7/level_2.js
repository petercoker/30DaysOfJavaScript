// Linear equation is calculated as follows: _ax + by + c = 0_.
// Write a function which calculates value of a linear equation, _solveLinEquation_.

function solveLinEquation(a, b, c, x) {
  // If b is 0, we can't solve for y (division by zero error)
  if (b === 0) {
    return "Variable 'b' cannot be zero for this calculation.";
  }

  // Rearranging: by = -ax - c  =>  y = (-ax - c) / b
  const y = (-a * x - c) / b;
  return y;
}

console.log(solveLinEquation(1, 2, -4, 2)); // Should return 1

// 2. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_.
// Write a function which calculates value or values of a quadratic equation,
// _solveQuadEquation_.
//
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//

function solveQuadEquation(a, b, c) {
  // Handle the case where it's not actually a quadratic equation
  if (a === 0) return "This is a linear equation, not quadratic.";

  // 1. Calculate the Discriminant (D = b² - 4ac)
  const discriminant = b ** 2 - 4 * a * c;

  // 2. Case: Two real roots (D > 0)
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }

  // 3. Case: One real root (D = 0)
  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  // 4. Case: No real roots (D < 0)
  return "No real roots exist.";
}

console.log(solveQuadEquation(1, 4, 4)); // [-2]
console.log(solveQuadEquation(1, -1, -2)); // [2, -1]
console.log(solveQuadEquation(1, 1, 1)); // No real roots exist.

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

// 17. Write a function which checks
// if all the items of the array are the same data type.

const allSameType = (arr) => arr.every((item) => typeof item === typeof arr[0]);

// function isSameType(arr) {
//   return arr.every((item) => typeof item === typeof arr.at(0));
// }
// console.log(isSameType([1, 2, 3])); // true
// console.log(isSameType([1, "2", 3])); // false

// best practice
function isSameType(arr) {
  // 1. Handle empty arrays
  if (arr.length === 0) return true;

  // 2. Cache the first type for a tiny bit more speed
  const firstType = typeof arr[0];

  // 3. Check every item against the first type
  return arr.every((item) => item === firstType);
}
console.log(isSameType([1, 2, 3])); // true
console.log(isSameType(["a", "b"])); // true
console.log(isSameType([1, "2"])); // false

// 18. JavaScript variable name does not support special characters or symbols except \$ or \_.
// Write a function **isValidVariable** which check if a variable is valid or invalid variable.

// let dollorVariable = "$";
// let underScoreariable = "_";

// // const isValidVariable = (varible) => varible.include(dollorVariable)

// function isValidVariable(variableName) {
//   if (
//     variableName.include(dollorVariable) ||
//     variableName.include(underScoreariable)
//   ) {
//     return true;
//   }
//   return true;
// }

// best practice
// function isValidVariable(variableName) {
//   // Regex Breakdown:
//   // ^[a-zA-Z$_]    -> Must start with a letter, $, or _
//   // [a-zA-Z0-9$_]* -> The rest can be letters, numbers, $, or _
//   // $              -> End of string
//   const validPattern = /^[a-zA-Z$_][a-zA-Z0-9$_]*$/;

//   return validPattern.test(variableName);
// }

// console.log(isValidVariable("myVar"));   // true
// console.log(isValidVariable("$money"));  // true
// console.log(isValidVariable("8ball"));   // false (starts with a number)
// console.log(isValidVariable("user-name")); // false (hyphens not allowed)

// console.log(isValidVariable("8"));

//
function isValidVariable(variableName) {
  const allowed =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
  const numbers = "0123456789";

  // Rule 1: Cannot be empty
  if (!variableName) return false;

  // Rule 2: Cannot start with a number
  if (numbers.includes(variableName[0])) return false;

  // Rule 3: Every single character must be in our "allowed" list
  for (let char of variableName) {
    if (!allowed.includes(char)) {
      return false; // Found a space, hyphen, or emoji? Return false!
    }
  }

  return true;
}

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// function getUniqueRandoms(count, min, max) {
//   const uniqueNumbers = new Set();

//   while (uniqueNumbers.size < count) {
//     const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
//     uniqueNumbers.add(randomValue);
//   }

//   return Array.from(uniqueNumbers); // Convert Set back to an Array
// }

// // Example: Get 5 unique numbers between 1 and 10
// console.log(getUniqueRandoms(7, 0, 9));

// best practice
function getUniqueRandoms(count, min, max) {
  // 1. Safety Check: Ensure the range is large enough for the count
  const range = max - min + 1;
  if (count > range) {
    return "Error: Count is larger than available unique numbers";
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomValue = Math.floor(Math.random() * range) + min;
    uniqueNumbers.add(randomValue);
  }

  return [...uniqueNumbers]; // Short-hand for Array.from()
}

console.log(getUniqueRandoms(7, 0, 9));

// 20. Write a function called reverseCountries,
// it takes countries array and first it copy the array
// and returns the reverse of the original array
function reverseCountries(countriesArray) {
  return countriesArray.toReversed();
}

console.log(reverseCountries(countries));

function reverseCountries1(countriesArray) {
  // 1. Explicitly copy the array using the spread operator [...]
  const copy = [...countriesArray];

  // 2. Reverse the copy
  return copy.reverse();
}
console.log(reverseCountries1(countries));
