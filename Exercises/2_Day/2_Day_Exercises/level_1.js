let challenge = "30 Days of JavaScript";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));

console.log(challenge.substring(2));

console.log(challenge.includes("Script"));

console.log(challenge.split(" "));

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(company.split(" "));

console.log(challenge.replace("JavaScript", "Pyton"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("a"));

console.log("Here");

console.log(challenge.lastIndexOf("a"));

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
const searchTerm = "because";
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

//SECTION : next level 19
