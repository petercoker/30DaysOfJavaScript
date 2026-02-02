const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Declare an _empty_ array;

const arr = [];

// 2. Declare an array with more than 5 number of elements

const numbers = [1, 2, 3, 4, 5, 6];

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers.at(0));
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers.at(-1)); // last index

// best pratice

let mid = Math.floor(numbers.length / 2);

if (numbers.length % 2 === 0) {
  console.log(numbers[mid - 1], numbers[mid]);
} else {
  console.log(numbers[mid]);
}
// For an even-length array (say length = 6), mid = 3.

// That points to numbers[3], which is the upper middle element (4 in [1,2,3,4,5,6]).

// But arrays with an even number of elements technically have two middle values:

// numbers[mid - 1] → the lower middle (3)

// numbers[mid] → the upper middle (4)

// So if you want to capture both middles, you need mid - 1 and mid.
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
const _mixedDataTypes_ = [1, "one", [], true, null, undefined, Symbol];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies.at(0)); // Firt

mid = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.at(mid - 1), itCompanies.at(mid));
} else {
  console.log(itCompanies.at(mid));
}

console.log(itCompanies.at(-1)); // last
// 10. Print out each company
for (const company of itCompanies) {
  console.log(company);
}
// 11. Change each company name  to uppercase one by one and print them out
for (const company of itCompanies) {
  console.log(company.toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let lastCompany = itCompanies.pop();
let companies = itCompanies.join(", ");
console.log(`${companies} and ${lastCompany} are big IT companies.`);

// best practice
companies = itCompanies.slice(0, -1).join(", ");
lastCompany = itCompanies.at(-1);
console.log(`${companies} and ${lastCompany} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_

// let input = prompt("Enter the company name: ");
// if (!input) {
//   alert("Invalid input");
// } else {
//   const cleanInput = input.trim().toLowerCase();

//   let company = cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1);
//   alert(
//     itCompanies.includes(company)
//       ? itCompanies.at(itCompanies.indexOf(company))
//       : alert("not found")
//   );
// }

//best practice
// let input = prompt("Enter the company name: ");

// if (!input || !input.trim()) {
//   alert("Invalid input");
// } else {
//   const searchInput = input.trim().toLowerCase();

//   // Look through the array. Convert each company to lowercase just for the comparison.
//   const foundCompany = itCompanies.find(company => company.toLowerCase() === searchInput);

//   if (foundCompany) {
//     alert(foundCompany); // Returns the original casing from the array (e.g., "IBM")
//   } else {
//     alert("Not found");
//   }
// }

let input = prompt("Enter the company name: ");
if (!input || !input.trim()) {
  alert("Invalid input");
} else {
  const searchInput = input.trim().toLowerCase();

  // Look through the array. convert each company to lowercase just for the comparison
  const foundCompany = itCompanies.find(
    (company) => company.toLowerCase() === searchInput
  );
  alert(foundCompany ? foundCompany : "Not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method

// Try
const regex = /^.{2,}$/;
const result = itCompanies.filter((company) => !company.match(regex));
console.log(result);

const result1 = [];
// Regex explanation: /o.*o/i
// o   : find an 'o'
// .* : followed by any number of characters
// o   : followed by another 'o'
// i   : case-insensitive (matches 'O' and 'o')
const two0sRegex = /o.*o/i;

// /o.*o/i  Zero or more of any character, better because its Flexible
// /o.{2}o/i
for (const company of itCompanies) {
  // If it does NOT match the regex (meaning it has 0 or 1 'o'), keep it.
  if (!twoOsRegex.test(company)) {
    result.push(company);
  }
}

console.log(result);

// What if you could use .filter()?
// Just for your reference, if this weren't a specific exercise forbidding the filter method, the "Best Practice" in modern JavaScript would look like this:

// // Keep companies where we CANNOT find two 'o's
// const result = itCompanies.filter(company => !/o.*o/i.test(company));

// Alternative: The "Mathematical" Approach
// If you are not comfortable with Regex, you can split the string by the letter 'o'.
// If the array length is greater than 2, it means there were more than 2 parts (meaning 2 or more 'o's).

// const result = [];

// for (const company of itCompanies) {
//   // Split the word by 'o' (case-insensitive)
//   // "Google" splits into ["G", "gle"] -> length 3 (because of 2 'o's)
//   // "Amazon" splits into ["Amaz", "n"] -> length 2
//   const parts = company.toLowerCase().split('o');

//   // If parts.length - 1 is the count of 'o's. We want <= 1.
//   if (parts.length - 1 <= 1) {
//     result.push(company);
//   }
// }

// console.log(result);

// 15. Sort the array using _sort()_ method

// try
const companies15 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const sortedCompanies = companies15.toSorted((a, b) => b - a);
// console.log(sortedCompanies);

//best practice

// If you need sorting that handles international characters (like accents or umlauts) correctly, use localeCompare().
// JavaScript

// Best practice for robust, internationalized alphabetical sort
const sortedCompanies1 = companies15.toSorted((a, b) => a.localeCompare(b));
console.log(sortedCompanies);

// 16. Reverse the array using _reverse()_ method
const companies16 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const companiesReversed = companies16.toReversed();

console.log(companiesReversed);

// 17. Slice out the first 3 companies from the array

const companies17 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const firstThreeCompanies = companies17.slice(0, 3);

console.log(firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
const companies18 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const lastThreeCompanies = companies18.slice(-3);

console.log(lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array

const companies19 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const mid19 = Math.floor(companies19.length / 2);

if (companies19.length % 2 == 0) {
  console.log(companies19.slice(mid19 - 1), companies19.slice(mid19));
} else {
  console.log(companies19.slice(mid19));
}

// 20. Remove the first IT company from the array

const companies20 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log("before - ", companies20);
const removeFirstITCompany = companies20.shift(); // remove first IT company
console.log("item - ", removeFirstITCompany);
console.log("after - ", companies20);

// 21. Remove the middle IT company or companies from the array
const companies21 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const mid21 = Math.floor(companies21.length / 2);

if (companies21.length % 2 == 0) {
  console.log(companies21.slice(mid21 - 1), companies21.slice(mid21));
} else {
  console.log(companies21.slice(mid21));
}


// best practice

const companies21_B = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const len_B = companies21_B.length;
const mid_B = Math.floor(len_B / 2);

let endSliceIndex;

if (len_B % 2 === 0) {
  // Remove 2 elements: Skip from mid - 1 to mid + 1 (i.e., skip 2 indices)
  endSliceIndex = mid_B + 1;
} else {
  // Remove 1 element: Skip from mid to mid + 1 (i.e., skip 1 index)
  endSliceIndex = mid_B + 1;
}

// Combine the part *before* the middle elements with the part *after*
const finalCompanies = [
  ...companies21_B.slice(0, mid_B - (len_B % 2 === 0 ? 1 : 0)), // Elements before the removal point
  ...companies21_B.slice(endSliceIndex)                      // Elements after the removal point
];

console.log("Original array (unchanged):", companies21_B);
// Output: [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

console.log("New array after removal:", finalCompanies);
// Output: [ 'Facebook', 'Google', 'Microsoft', 'IBM', 'Oracle', 'Amazon' ]
// 22. Remove the last IT company from the array
const companies22 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(companies22.pop());
console.log(companies22);

// Best Price 

const companies22a = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// BEST PRACTICE: Creates a new array without the last element
// -1 means "start at the end", 1 means "remove one item"
const companiesMinusLast = companies22a.toSpliced(-1, 1);


console.log(companiesMinusLast); 
// Output: ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"]

// 23. Remove all IT companies
const companies23 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

companies23.splice(0, companies23.length);

console.log(companies23);

// best pratice 
// If you defined the array with let, simply reassign it to an empty array. 
// This is the most readable approach.
let companies23a = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
companies23a = [];
console.log(companies23a)