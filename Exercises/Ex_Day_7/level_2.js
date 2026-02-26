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

// 5. Declare a function name _swapValues_. This function swaps value of x to y.

// function swapValues(x, y) {
//   let temporary = x;
//   x = y;
//   y = temporary;
//   console.log(`x = ${x}, y = ${y}`);
// }

// swapValues(3, 4);

// best practice
function swapValues(x, y) {
  // Use array destructuring to swap them in one line
  [x, y] = [y, x];
  console.log(`x = ${x}, y = ${y}`);
}

swapValues(3, 4); // x = 4, y = 3

// 6. Declare a function name _reverseArray_.
// It takes array as a parameter and it returns the reverse of the array
// (don't use method).

// const arr = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//   // start at the end of the array
//   // and stores the into a new array
//   // used due arr.at(-1) instead of arr.length - 1 as its more readable and concise. Also I'm not building a .
//   let reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // for (let i = arr.at(-1); i >= 0; i--) { (cause ) [ undefined, 5, 4, 3, 2, 1 ]
//     // console.log(arr[i], reverseArr);
//     reverseArr.push(arr[i]);
//     // console.log(arr[i], reverseArr);
//   }
//   // console.log(reverseArr);
//   return reverseArr;
// }

// console.log(reverseArray(arr));

// best practice
function reverseArray(arr) {
  const reversed = [];

  // Starting from the last index (length - 1) down to 0
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

const original = [1, 2, 3, 4, 5];
original;
console.log(reverseArray(original)); // [5, 4, 3, 2, 1]

// 7. Declare a function name _capitalizeArray_.
// It takes array as a parameter and it returns the - capitalizedarray

// function capitalizedarray(arr) {
//   return arr.map((name) => name[0].toUpperCase() + name.slice(1));
// }

// const animals = ["dog", "cat", "frog", "snake"];
// console.log(capitalizedarray(animals));

function capitalizeArray(arr) {
  // .map() creates a NEW array, which follows the rule of "Immutability"
  // 1. Capitalize first letter
  // 2. Attach the rest of the string starting from index 1
  return arr.map((word) =>
    word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : "",
  );
}

const animals = ["dog", "CAT", "fRoG"];
console.log(capitalizeArray(animals)); // ["Dog", "Cat", "Frog"]

// 8. Declare a function name _addItem_.
// It takes an item parameter and it returns an array after adding the item

// This changes the original array not good
// function addItem(item, list) {
//   list.push(item);
//   return list;
// }

// Best Practice: The original list remains untouched
function addItem(item, list) {
  return [...list, item];
}

const groceryList = ["Milk", "Eggs"]; // ['Milk', 'Eggs'] (Original is safe!)
const newList = addItem("Bread", groceryList); // ['Milk', 'Eggs', 'Bread']

console.log(groceryList);
console.log(newList);
