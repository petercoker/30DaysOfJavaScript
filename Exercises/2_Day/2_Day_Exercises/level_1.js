let challenge = "30 Days of JavaScript ";
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
const searchTerm = "because";
let match = "30 Days of JavaScript";
let thirtyDaysOfJavaScript = " 30 Days Of JavaScript ";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));

console.log(challenge.substring(2));

console.log(challenge.includes("Script"));

console.log(challenge.split(" "));

console.log(company.split(" "));

console.log(challenge.replace("JavaScript", "Pyton"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("a"));

console.log("Here");

console.log(challenge.lastIndexOf("a"));

const indexOfFirst = sentence.indexOf(searchTerm);

console.log(
  `The index of the first occurrence "${searchTerm}" is ${indexOfFirst}`
);

console.log(
  `The index of the second occurrence  "${searchTerm}" is ${sentence.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);

console.log(
  `The index of the last occurrence "${searchTerm}" is ${sentence.lastIndexOf(
    searchTerm
  )}`
);

console.log(sentence.search(searchTerm));

console.log(thirtyDaysOfJavaScript.trim());

console.log(challenge.startsWith(match));
console.log(challenge.endsWith(match));

console.log(challenge.match(/a/g)); // Regex to find all the a's

let part1 = "30 Days of";
let part2 = "JavaScript";
console.log(part1.concat(" ", part2)); // Adding a space in between

//SECTION : next level 24
console.log(challenge.repeat(2));
