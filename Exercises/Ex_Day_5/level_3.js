// 1. The following is an array of 10 students ages:

import { countries } from "./countries.js";

// // - Compare the value of (min - average) and (max - average), use _abs()_ method
// // - Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

// // - Sort the array and find the min and max age
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// const sortedAgesAscending = ages.toSorted((a, b) => a - b);
// console.log(sortedAgesAscending);

// // - Find the median age(one middle item or two middle items divided by two)
// const median = sortedAgesAscending.at(sortedAgesAscending.length / 2);
// console.log(median);

// // - Find the average age(all items divided by number of items)
// let sum = 0;
// sortedAgesAscending.forEach((age) => (sum += age));
// const average = Math.floor(sum / sortedAgesAscending.length);
// console.log(average);

// // - Find the range of the ages(max minus min)
// const max = Math.max(...ages);
// console.log(max);

// const minus = ages.forEach((number) => {
//   if (number < 0) {
//     // Printing result
//     return console.log(number);
//   }
// });
// console.log(minus);

// const min = Math.min(...ages);
// console.log(min);

// // - Compare the value of (min - average) and (max - average), use _abs()_ method
// console.log(Math.abs(max - min));

// // Slice the first ten countries from the countries

// const firstTenCountries = countries.slice(0, 10);
// console.log(firstTenCountries);

// best practice

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort (Best Practice: toSorted prevents mutating the original)
const sortedAges = ages.toSorted((a, b) => a - b);
const min = sortedAges.at(0);
const max = sortedAges.at(sortedAges.length - 1);

// - Median (Correct Logic for Even Length)
const len = sortedAges.length;
const middle1 = sortedAges[len / 2 - 1];
const middle2 = sortedAges[len / 2];
const median = (middle1 + middle2) / 2;

// -  Average (Best Practice: use .reduce)
const sum = ages.reduce((acc, cur) => acc + cur, 0);
const average = sum / ages.length;

// - Range
const range = max - min;

// - Compare (min - average) vs (max - average) using Math.abs()
const minDiff = Math.abs(min - average);
const maxDiff = Math.abs(max - average);

console.log(`Sorted Ages: ${sortedAges}`);
console.log(`Min: ${min}, Max: ${max}, Range: ${range}`);
console.log(`Median: ${median}, Average: ${average}`);
console.log(`Diff (Min-Avg): ${minDiff}, Diff (Max-Avg): ${maxDiff}`);

// Slice the first ten countries from the countries
const limit = 10;
const firstTenCountries = countries.slice(0, limit);
console.log(firstTenCountries);

// 2. Find the middle country(ies) in the [countries array]
// const middleIndex = countries.length / 2;
// const middleCountries = countries.at(Math.floor(middleIndex));
// console.log(middleCountries);

// best practice
const length = countries.length;
let mid = Math.floor(length / 2);

let middle;

if (length % 2 === 0) {
  // EVEN: Grab the two middle items
  middle = countries.slice(mid - 1, mid + 1);
} else {
  // ODD: Grab the single middle item
  // For length 5, this grabs index 2
  middle = countries[mid];
}

console.log(middle);

// /* CHEAT SHEET: FINDING THE MIDDLE OF AN ARRAY
//   Formula for Even Arrays: array.slice(mid - 1, mid + 1)
// */

// const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland"];
// // Indices:           0          1          2          3          4          5

// // 1. Find the math center
// const mid = Math.floor(countries.length / 2); // Result is 3

// /* 2. The "Bracket" Strategy
//   To get the TWO middle items, we go 1 step back and 1 step forward from the center.
// */
// const start = mid - 1; // 2
// const stop  = mid + 1; // 4

// /* 3. The Slice Action
//   - It starts EXACTLY at index 2 ("Canada")
//   - It stops JUST BEFORE index 4 ("Ethiopia")
// */
// const middleItems = countries.slice(start, stop);

// console.log(middleItems); // Output: ["Canada", "Denmark"]

// 3. Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.

// const firstHalf = countries.slice(0, Math.floor(countries.length / 2));
// const secondHalf = countries.slice(Math.floor(countries.length / 2) + 1);

// const chunk = Math.floor(countries.length / 2);

// if (countries.length % 2 === 0) {
//   console.log(firstHalf);
//   console.log(secondHalf);
// } else {
//   const firstHalf = countries.slice(0, chunk + 1);
//   const secondHalf = countries.slice(chunk + 2);
//   console.log(firstHalf);
//   console.log(secondHalf);
// }

// 1. Calculate the split point
// Math.ceil ensures that if length is 7, split is 4 (giving the first half the extra)
// If length is 6, split is 3 (making them equal)
const splitPoint = Math.ceil(countries.length / 2);

// 2. Slice the arrays
// Rule: The END of the first slice must be the START of the second slice.
const firstHalf = countries.slice(0, splitPoint);
const secondHalf = countries.slice(splitPoint);

console.log(firstHalf);
console.log(secondHalf);
