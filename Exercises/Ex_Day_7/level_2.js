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

// 3. Declare a function name _printArray_.
// It takes array as a parameter and it prints out each value of the array.

// function printEachValue(arr) {
//   if (arr?.length === 0) {
//     return console.log("Empty array");
//   }
//   arr.forEach((value) => {
//     console.log(value);
//   });
// }

// printEachValue([1, 3, 5, 5]);
// printEachValue([]);

// best practice
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

// 3. Declare a function name _printArray_.
// It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  // 1. Check if the input is actually an array
  if (!Array.isArray(arr)) {
    return console.error("Input is not an array");
  }

  // 2. Handle empty case (Optional, but good UX)
  if (arr.length === 0) {
    console.log("Empty array");
    return;
  }

  // 3. Print each value
  arr.forEach((value) => console.log(value));
}

printArray([1, 3, 5, 5]);

// 4. Write a function name _showDateTime_
// which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(date) {
  return date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Ensures 24-hour format
    })
    .replace(",", ""); // Removes the comma between date and time
}

const date = new Date("2020-01-08T04:08:00");
console.log(showDateTime(date));

function swapValues(x, y) {
  let temporary = x;
  x = y;
  y = temporary;
  console.log(`x = ${x}, y = ${y}`);
}

swapValues(3, 4);
