// 1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  `The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.`
);
// correct, but less clean because of the escaping.

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teach us to help one another"
);
// Works fine because the outer string uses double quotes, so the inner single quotes don’t need escaping.

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teach us to help one another`
);

// 2. Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
  `Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.`
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof "10" == 10); //This isn’t really checking the type correctly — you’re comparing a string ("string") to a number (10).

let num = "10";
let numInt = Number(num);
console.log(numInt);
console.log(10);
console.log(numInt == 10); //Use === (strict equality) instead of == to avoid type coercion surprises.

// Check if typeof '10' is exactly equal 10
console.log(typeof "10" === typeof 10); // false

// Convert string to number
let num1 = "10";
let numInt1 = Number(num1);

// Now the match
console.log(typeof numInt === typeof 10); // true
console.log(numInt1 === 10); // true

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// checking parseFloat('9.8') is equal to 10
console.log(parseFloat("9.8") === 10);

// round up 9.8 to 10 to make it equal to 10
console.log(Math.ceil(parseFloat("9.8")) === 10);

// 5. Check if 'on' is found in both python and jargon
let word = "on";
console.log("python".includes(word) && "jargon".includes(word));

console.log(
  "python".includes(word.toLowerCase()) && "jargon".includes(word.toLowerCase())
); //If you wanted to make it case‑insensitive, you could normalize both strings first:

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon.";
let jargonWord = "jargon";
console.log(sentence.includes(jargonWord));

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// 8. Generate a random number between 50 and 100 inclusively.
const min = 50;
const max = 100;

console.log(Math.floor(Math.random() * max - min) + min);

// 9. Generate a random number between 0  and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// 10. Access the 'JavaScript' string characters using a random number.
let javaScriptName = "JavaScript";
console.log(javaScriptName.length); // 10

console.log(
  javaScriptName[Math.floor(Math.random() * javaScriptName.length + 1)]
); // But valid string indices for "JavaScript" are 0 through 9. Incex 10 is out of range - it will return undefined sometimes

// best practice
let javaScriptName1 = "JavaScript";
let randomIndex = Math.floor(Math.random() * javaScriptName1.length);
console.log(javaScriptName1[randomIndex]);

// 11. Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// cleaner alternative
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
    `);

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence =
  "You cannot end a sentence with because because because is a conjunction";

// Define the target phrase
const target = "because because because";

// Find the starting index of the phrase
const start = sentence.indexOf(target);

console.log("breakdown", start + target.length);

const result = sentence.slice(start, start + target.length);

console.log(result);
