import { countries } from "./countries.js";
// 1, Create a separate countries.js file and store the countries array in to this file,
// Create a separate file web_techs.js and store the webTechs array in to this file.
// Access both file in main.js file

// Check file main.js

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// const words = text.replaceAll(/[^\w\s]/g, "").split(" ");
// console.log(words);
// console.log(words.length);

const words1 = text
  .replaceAll(/[^\w\s]/g, "") // Removes punctuation
  .trim() // Removes leading/trailing whitespace
  .split(/\s+/); // Splits by one or more spaces

console.log(words1);

// 3. In the following shopping cart add, remove, edit items

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

// console.log(shoppingCart);

// shoppingCart.unshift("Meat");

// console.log(shoppingCart);

// shoppingCart.push("Sugar");

// console.log(shoppingCart);

// const shoppingCartWithoutHoney = shoppingCart.filter(
//   (item) => item !== "Honey"
// );

// console.log(shoppingCartWithoutHoney);

// const modifyShoppingCart = shoppingCart.map((item) =>
//   item === "Tea" ? (item = "Green Tea") : item
// );

// console.log(modifyShoppingCart);

// Missing Checks: The instructions say to add "Meat" and "Sugar" if they are not already added. Your code adds them unconditionally. If you run your code twice, you will have two Meats and two Sugars.

// Inconsistent Mutation: You used .unshift() and .push() (which mutate the original array) but then used .filter() and .map() (which create new arrays). It is best practice to stick to one style—usually the non-mutating style in modern JavaScript.

// Ternary Syntax: Inside your .map(), item = "Green Tea" is an assignment inside a return statement. While it works, it is redundant. You only need to return the value.
//best practice

shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// 1. Add 'Meat' to beginning if not present
if (!shoppingCart.includes("Meat")) {
  shoppingCart = ["Meat", ...shoppingCart];
}

console.log(shoppingCart);

// 2. Add 'Sugar' to end if not present
if (!shoppingCart.includes("Sugar")) {
  shoppingCart = [...shoppingCart, "Sugar"];
}

console.log(shoppingCart);

// 3. Remove 'Honey' (assuming allergic = true)
const isAllergicToHoney = true;
if (isAllergicToHoney) {
  shoppingCart = shoppingCart.filter((item) => item !== "Honey");
}

console.log(shoppingCart);

// 4. Modify 'Tea' to 'Green Tea'
shoppingCart = shoppingCart.map((item) =>
  item === "Tea" ? "Green Tea" : item
);

console.log(shoppingCart);
/* Output: 
["Meat", "Milk", "Coffee", "Green Tea", "Sugar"] 
*/

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("ETHIOPIA");
}


// best practice 

const countryExists = countries.some((c) => c.toLowerCase() === "ethiopia");

if (countryExists) {
  console.log("ETHIOPIA");
} else {
  // 2. Non-mutating Add (Best Practice)
  // We create a NEW array using the spread operator
  const updatedCountries = [...countries, "Ethiopia"];
  console.log("Added Ethiopia to the list.");
  console.log(updatedCountries);
}
