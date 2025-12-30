// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = "30 Days Of JavaScript";

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, challenge.indexOf(" ")));

let example = "Learn JavaScript Fast";
console.log(challenge.substring(0, 2)); // "Le" Not the full first word
console.log(challenge.substring(0, challenge.indexOf(" "))); // "Learn" Correct

// using challenge.indexOf(" ") makes your code adaptable to any string, regardless of how long the first word is.

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, challenge.length));
console.log(challenge.slice(3)); // Also returns "Days Of JavaScript"

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// 9. Split the string into an array using split() method
console.log(challenge.split(""));

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
console.log(companies.split(", ").map((companies) => companies.trim())); // This ensures clean output even if spacing is inconsistent.

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.replaceAll("JavaScript", "Python")); // If you’re writing code for modern JavaScript projects (React, Node.js, modern browsers), it’s safe and clean to default to replaceAll().
console.log(challenge.replace(/JavaScript/g, "Python")); // Fallback for older environments:

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
console.log(challenge[15]); // Bracket notation is shorter and more idiomatic in many codebases, while charAt() is more explicit and avoids returning undefined (it returns an empty string if the index is out of range).

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)); // Use charCodeAt() when you want the numeric code of a character.

console.log(challenge.indexOf("J")); // Use indexOf() when you want the position of a character.

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

console.log([...challenge.matchAll(/a/g)].map((a) => a.index)); // get all the a

for (let m of challenge.matchAll(/a/g)) {
  console.log(m.index);
  console.log(m[0], "at index", m.index);
}

/*
In JavaScript, index is not a placeholder you invented — it’s the actual property name that the language gives you. It always means the position number of the match inside the string.
*/
