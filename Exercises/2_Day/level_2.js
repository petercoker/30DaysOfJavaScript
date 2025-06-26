let message =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

let motherTeresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

let myNumber = parseFloat("9.8");
let rounded = Math.round(myNumber);
let searchTerm = "on";
let hopefulMessage = "I hope this course is not full of jargon";
let python = "python";
let jargon = "jargon";
let javaScript = "JavaScript";



console.log(message);
console.log(motherTeresa);

let stringValue = "10";
let numberValue = 10;

console.log(typeof stringValue === numberValue);
console.log(Number(stringValue) === numberValue);

console.log(rounded === 10);

console.log(python.includes(searchTerm) && jargon.includes(searchTerm));

console.log(hopefulMessage.includes(jargon));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

console.log(getRandomNumber(50, 100));

console.log(Math.floor(Math.random() * (255 - 0 + 1)));

let randomIndex = Math.floor(Math.random() * javaScript.length);
console.log(javaScript[randomIndex]);

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

// another way
console.log(
  "1\t1\t1\t1\t1\n" +
    "2\t1\t2\t4\t8\n" +
    "3\t1\t3\t9\t27\n" +
    "4\t1\t4\t16\t64\n" +
    "5\t1\t5\t25\t125" // No \n on the last line unless you want an extra blank line
);

