// 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(sentence.toLowerCase().match(/love/g).length);

// best practice
// Null safety: If the word doesn’t exist, .match() returns null, and calling .length would throw an error.
const matches = sentence.toLowerCase().match(/\blove\b/g) || [];
console.log(matches.length);

let cleaned = sentence.replaceAll(".", "");
const love = "love";

let words = cleaned.toLowerCase().trim().split(" ");
let num = 0;
for (const element of words) {
  if (love === element) {
    num++;
  }
}
console.log(num);

// Best practice alternatives

// Remove punctuation and make the sentence lower case
cleaned = sentence.replaceAll(/[^\w\s]/g, "").toLowerCase();

// split into words
words = cleaned.split(" ");

// count how many equal "love"
num = words.filter((word) => word === love).length;
console.log(num);

// using reduce
num = words.reduce((count, word) => (word === love ? count + 1 : count), 0);
console.log(num);

// 2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

sentence =
  "You cannot end a sentence with because because because is a conjunction";
// return an array of matches using the match()
console.log(
  `Use match() to count the number is  ${sentence.match(/because/g).length}`
);

//3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//TODO : Comeback
sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// the goal is to have it 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30 Days Of JavaScript is also the result of love of teaching'
cleaned = sentence.replaceAll(/[^\w\s]/g, "");
console.log(cleaned);

// coorection

cleaned = sentence
  .replaceAll(/[^a-zA-Z0-9\s.,!?]/g, "") // keep letters, digits, spaces, ., , !, ?
  .replaceAll(/(\d+)([A-Za-z])/g, "$1 $2") // add space between number and word
  .replaceAll(/([a-z])([A-Z])/g, "$1 $2") // space between lowercase → uppercase
  .replaceAll("Java Script", "JavaScript") // protect JavaScript
  .replaceAll(/\s+/g, " ") // normalize spaces
  .trim();

console.log(cleaned);



// 4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

sentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// extract the numbers
let regEx = /\d+/g;
let numbers = sentence.match(regEx);

// count the total annual income
let total = 0;
for (const num of numbers) {
  total += Number(num);
}

console.log(total);

// Extract the numbers (they come out as trings)
numbers = sentence.match(regEx);

// Convert to numbers
let salary = Number(numbers[0]);
let bonus = Number(numbers[1]);
let courses = Number(numbers[2]);

// calculate annual income
total = salary * 12 + bonus + courses * 12;
console.log(total);

// best practice
// map(Number) https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here
// typeof Number === "function"; // true

// Extract all numbers as an array of strings
numbers = sentence.match(regEx).map(Number);

// Assign them meaningful names using array destructuring assignment
let [salary1, bonus1, courses1] = numbers;

// Calculate annual income
let totalAnnualIncome = salary * 12 + bonus + courses * 12;
console.log(totalAnnualIncome);
