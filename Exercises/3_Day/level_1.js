// SECTION level 1 exercise 1
let sentence =
  "The fat cat ran down the street. It was searching for a mouse to ear.";

const sentence1 = "The dog barked loudly.";
const sentence2 = "Loudly the dog barked.";
// console.log(sentence.match(/fat/g));
// console.log(sentence.match(/the/gi));

sentence = "The car parked in the garage.";
// console.log(sentence.match(/.ar/g)); // . Period matches any single character expect a line break

sentence = "the car parked in The garage.";

// console.log(sentence.match(/[tT]he/g)); // character class or set
// console.log(sentence.match(/[Tt]he/));

sentence = "The dog barked loudly.";

console.log(sentence.match(/^The/));
console.log(sentence1.match(/^The/));

// Regex: /^The/
// ^   : Means "start of the string"
// The : Means "followed by 'The'"
const regexStart = /^The/;

console.log("\n--- Caret at Start of Pattern (Anchors) ---");
console.log("Sentence 1:", sentence1);
console.log("Match:", sentence1.match(regexStart)); // Output: ["The"] (It starts with "The")

console.log("Sentence 2:", sentence2);
console.log("Match:", sentence2.match(regexStart)); // Output: null (It does NOT start with "The")

const word1 = "cat"; // Starts with 'c'
const word2 = "bat"; // Starts with 'b' (not 'c')
const word3 = "star"; // Contains "tar" ('t' is not 'c')

// Regex: /[^c]ar/g
// [^c] : Matches any single character that is NOT 'c'
// ar   : Followed by 'a', then 'r'
const regexNegate = /[^c]ar/g;

console.log("\n--- Caret Inside Square Brackets (Negation) ---");
console.log("Word 1 ('cat'):", word1.match(regexNegate)); // Output: null (First char 'c' is forbidden)
console.log("Word 2 ('bat'):", word2.match(regexNegate)); // Output: ["bar"] ('b' is allowed, followed by 'ar')
console.log("Word 3 ('star'):", word3.match(regexNegate)); // Output: ["tar"] ('t' is allowed, followed by 'ar')

// Regex: /bo*k/
// b  : Matches 'b'
// o* : Matches zero or more 'o's (so 'o' is optional and can repeat)
// k  : Matches 'k'
const regexBook = /bo*k/g; // 'g' to find all matches

console.log("--- '*' after a single character ---");

word1 = "bk"; // 'o' appears zero times
console.log(`"${word1}" matches:`, word1.match(regexBook)); // Output: ["bk"]

word2 = "bok"; // 'o' appears one time
console.log(`"${word2}" matches:`, word2.match(regexBook)); // Output: ["bok"]

word3 = "booook"; // 'o' appears multiple times
console.log(`"${word3}" matches:`, word3.match(regexBook)); // Output: ["booook"]

const word4 = "brick"; // Does not match the pattern
console.log(`"${word4}" matches:`, word4.match(regexBook)); // Output: null

let senstence = "";

//*
//


//*/

//**!SECTION
// The + symbol matches one or more repetitions of the preceding character. For example, the regular expression c.+t means: a lowercase c, followed by at least one character, followed by a lowercase t. It needs to be clarified thatt is the last t in the sentence.
// "c.+t" => The fat cat sat on the mat.
//INFO : What confusing me is the difference betwen . and + together as well as what . is again 
//  */
console.log("confused ");
