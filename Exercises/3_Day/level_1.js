// SECTION level 1 exercise 1
let sentence =
  "The fat cat ran down the street. It was searching for a mouse to ear.";
// console.log(sentence.match(/fat/g));
// console.log(sentence.match(/the/gi));

sentence = "The car parked in the garage.";
// console.log(sentence.match(/.ar/g)); // . Period matches any single character expect a line break

sentence = "the car parked in The garage.";

console.log(sentence.match(/[tT]he/g));
// console.log(sentence.match(/[Tt]he/));
