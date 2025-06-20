let message =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

let motherTeresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

let myNumber = parseFloat("9.8");
let rounded = Math.round(myNumber);
let searchTerm = "on";
let sentence = "I hope this course is not full of jargon";
let python = "python";
let jargon = "jargon";
console.log(message);
console.log(motherTeresa);

let stringValue = "10";
let numberValue = 10;

console.log(typeof stringValue === numberValue);
console.log(Number(stringValue) === numberValue);

console.log(rounded === 10);

console.log(python.includes(searchTerm) && jargon.includes(searchTerm));

console.log(sentence.includes(jargon));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
// SECTION level 2 exercise 8
