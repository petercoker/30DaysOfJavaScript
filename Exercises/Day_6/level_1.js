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

//6. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

const patternLimit6 = 10;
console.log(`i i^2 i^3`);
for (let i = 0; i <= patternLimit6; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// best practice
const patternLimit1 = 10;
console.log(`i\ti^2\ti^3`); // Added \t for tabs

for (let i = 0; i <= patternLimit1; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`); // Columns will now align
}

// option b
const data = [];
for (let i = 0; i <= 10; i++) {
  data.push({ i: i, "i^2": i ** 2, "i^3": i ** 3 });
}
console.table(data);

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
const limit7 = 100;
for (let index = 0; index <= limit7; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

// more efficienct
const limit2 = 100;

// Notice the change: i += 2 instead of i++
for (let i = 0; i <= limit2; i += 2) {
  console.log(i);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
const limit8 = 100;
for (let index = 0; index <= limit8; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

// more efficenct
// Just like with the even numbers, if you know you only want odds, you can skip the "check" entirely. By starting your loop at 1 and adding 2 each time,
// you only ever land on odd numbers.
const limit3 = 100;

for (let i = 1; i <= limit3; i += 2) {
  console.log(i);
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
const limit9 = 100;
// Start at 2 (0 and 1 are not prime) A prime number is any positive number that can only be divided by itself and the number 1.
for (let i = 2; i <= limit9; i++) {
  let isPrime = true;
  // Check if any number from 2 up to the square root of 'i' divides it
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
const limit10 = 100;
for (let i = 0; i <= limit10; i++) {
  sum += i;
}

console.log(sum);

// While the loop is great for learning, a senior developer or mathematician would use a formula known as Gauss's Summation.
const n = 100;
const fastSum = (n * (n + 1)) / 2;
console.log(fastSum); // 5050
