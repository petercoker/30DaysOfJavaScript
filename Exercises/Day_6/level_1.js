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

const mernStack = ["MongoDB", "Express", "React", "Node"];

let limit = 10;

// 1, Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i < limit; i++) {
  console.log(countries[i]);
}

let w = 0;
while (w < limit) {
  console.log(countries[w]);
  w++;
}

let d = 0;
do {
  console.log(countries[d]);
  d++;
} while (d <= limit);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = limit; i >= 0; i--) {
  console.log(countries[i]);
}

w = limit;
while (w >= 0) {
  console.log(countries[w]);
  w--;
}

d = limit;
do {
  console.log(countries[d]);
  d--;
} while (d >= 0);

// 3. Iterate 0 to n using for loop
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

w = 0;
while (w < countries.length) {
  console.log(countries[w]);
  w++;
}

d = 0;
do {
  console.log(countries[d]);
  d++;
} while (d <= limit);

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

let patternLimit = 7;
let symbol = "#";
for (let i = 1; i <= patternLimit; i++) {
  let str = "# ";
  console.log(str.repeat(i));
}

// for (let row = 1; row <= patternLimit; row++) {
//   // for every row, run the col
//   for (let col = 1; col <= row; col++) {
//     console.log(symbol);
//   }
//   // Add a new line character after contents of each line
//   symbol += "\n";
// }

// let rows = 7;

// // pattern variable carries the final pattern in string format
// let pattern = "#";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//   console.log(pattern);

//   // inner loop runs for n
//   for (let num = 1; num <= n; num++) {
//     console.log(pattern);
//   }

//   // Add a new line character after contents of each line
//   pattern += "\n";
// }
// // console.log(pattern);

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
const countLimit = 10;
for (let index = 0; index <= countLimit; index++) {
  console.log(`${index} x ${index} = ${index * index}`);
}

// best practice
const limit1 = 10;
for (let i = 0; i <= limit1; i++) {
  console.log(`${i} x ${i} = ${i ** 2}`);
  // Fun fact: i ** 2 is a modern way to say "i squared"!
}
