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

const limit = 10;

// 1, Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let index = 0; index < limit; index++) {
//   console.log(countries[index]);
// }

// const index = 0;
// while (index <= limit) {
//   console.log(countries[index]);
//   index++;
// }

let i = 0;
do {
  console.log(countries[i]);
  i++
} while (i <= limit);

let index = 0
do {
  console.log(countries[index]);
  index++
} while (index <= limit)