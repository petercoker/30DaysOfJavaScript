// import { updatedCountries } from "../Day_6/";
const updatedCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

// // 1. Copy countries array(Avoid mutation)
// const copiedCountries = [...updatedCountries];

// // 2. Arrays are mutable. Create a copy of array which does not modify the original.
// // Sort the copied array and store in a variable sortedCountries
// const sortedCountries = copiedCountries.sort((a, b) =>
//   b.toLowerCase() < a.toLowerCase() ? 1 : -1,
// );

// console.log(sortedCountries);

// 1. Copy and Sort in one go (Modern Best Practice)
// const sortedCountries = [...updatedCountries].sort((a, b) =>
//   a.localeCompare(b),
// );

// console.log(sortedCountries);

// best practice
// This does NOT change updatedCountries; it returns a new sorted array.
const sortedCountries = updatedCountries.toSorted((a, b) => a.localeCompare(b));

console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// const sortedWebTechs = webTechs.toSorted((a, b) => a.localeCompare(b));

// const sortedMernStack = mernStack.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedWebTechs);
// console.log(sortedMernStack);

// best pracitce

const alphabetize = (arr) => arr.toSorted((a, b) => a.localeCompare(b));

const sortedWebTechs = alphabetize(webTechs);
const sortedMernStack = alphabetize(mernStack);

// 5. Find the country containing the hightest number of characters in the countries array

// 1. Get the max length (Use ... to spread the array)
const lengths = updatedCountries.map((c) => c.length);
const maxLength = Math.max(...lengths);

// 2. Find the country that has that length
const winner = updatedCountries.find((c) => c.length === maxLength);

console.log(winner); // "Ethiopia"

// more senior

const updatedCountries2 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const winner2 = updatedCountries2.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(winner2); // "Ethiopia"

// 6. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

// const filterByEnding = (arr, suffix) => {
//   const result = arr.filter((item) =>
//     item.toLowerCase().endsWith(suffix.toLowerCase()),
//   );

//   return result.length > 0 ? result : `No countries end with ${suffix}`;
// };

// console.log(filterByEnding(updatedCountries, "land"));

// best practice
/**
 * Best Practice: Use a generic name like 'filterByText'
 * and .includes() to satisfy the "contains" requirement.
 */
const filterByText = (arr, search) => {
  const result = arr.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return result.length > 0 ? result : `No countries contain ${search}`;
};

console.log(filterByText(updatedCountries, "land"));
// Output: ["Finland", "Iceland", "Ireland"]
// (Note: Ireland is included because it contains 'land'!)

// 7. Extract all the countries containing only four characters from
// the countries array and print it as array
// const countriesFourCharacters = updatedCountries.map((c) => c.slice(0, 4));
// console.log(countriesFourCharacters);

// The Correct Way: Filter for length
const countriesFourCharacters = updatedCountries.filter((c) => c.length === 4);

console.log(countriesFourCharacters);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
// const countriesTwoMoreWords = updatedCountries.filter((c) => c.length >= 2);

// console.log(countriesTwoMoreWords);

// Option 1: The "Includes" way (Short & Sweet)
// If it has a space, it has at least two words.
const multiWordCountries = updatedCountries.filter((c) => c.includes(" "));

// Option 2: The "Split" way (More robust)
// This actually counts the words.
const countriesTwoMoreWords = updatedCountries.filter((c) => {
  return c.split(" ").length >= 2;
});

console.log(countriesTwoMoreWords);

// 9. Reverse the countries array and capitalize each country and stored it as an array
// const ex9 = updatedCountries
//   .reverse()
//   .map((c) => c.charAt(0).toUpperCase() + c.slice(1));

// console.log(ex9);

// BEST PRACTICE: Original array stays the same, ex9 gets the new data
const ex9 = updatedCountries.toReversed().map((c) => c.toUpperCase()); // Since they are already capitalized, let's look at why we map
console.log(ex9);

const ex91 = [...updatedCountries] // 1. Create a shallow copy (prevents mutation)
  .reverse() // 2. Reverse the copy
  .map((c) => c.toUpperCase()); // 3. Transform (e.g., to all uppercase)

console.log(ex91);
console.log(updatedCountries); // Original is still in its original order!
