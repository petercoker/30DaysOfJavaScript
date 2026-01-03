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

// 1. Sort (Best Practice: toSorted prevents mutating the original)
const sortedAges = ages.toSorted((a, b) => a - b);
const min = sortedAges.at(0);
const max = sortedAges.at(sortedAges.length - 1);

// 2. Median (Correct Logic for Even Length)
const len = sortedAges.length;
const middle1 = sortedAges[len / 2 - 1];
const middle2 = sortedAges[len / 2];
const median = (middle1 + middle2) / 2;

// 3. Average (Best Practice: use .reduce)
const sum = ages.reduce((acc, cur) => acc + cur, 0);
const average = sum / ages.length;

// 4. Range
const range = max - min;

// 5. Compare (min - average) vs (max - average) using Math.abs()
const minDiff = Math.abs(min - average);
const maxDiff = Math.abs(max - average);

console.log(`Sorted Ages: ${sortedAges}`);
console.log(`Min: ${min}, Max: ${max}, Range: ${range}`);
console.log(`Median: ${median}, Average: ${average}`);
console.log(`Diff (Min-Avg): ${minDiff}, Diff (Max-Avg): ${maxDiff}`);

// 6. Slice first 10 countries
const firstTenCountries = countries.slice(0, 10);
