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
const sortedCountries1 = updatedCountries.toSorted((a, b) =>
  a.localeCompare(b),
);

console.log(sortedCountries);
