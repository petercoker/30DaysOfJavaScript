// import { updatedCountries } from "../Day_6/"
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
