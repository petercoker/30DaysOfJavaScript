import { countries } from "./countries.js";
import { webTechs } from "./webTechs.js";

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// const words = text.replaceAll(/[^\w\s]/g, "").split(" ");
// console.log(words);
// console.log(words.length);

// Import arrays from separate files
// const countries = require("./countries");
// const webTechs = require("./web_techs");

// // Quick verification
// console.log("countries (count):", countries.length);
// console.log("first country:", countries[0]);

// console.log("webTechs (count):", webTechs.length);
// console.log("first webTech:", webTechs[0]);

// Export if other modules want to use them
// module.exports = { countries, webTechs };

// Best practice

// Robust version
text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words1 = text
  .replaceAll(/[^\w\s]/g, "") // Removes punctuation
  .trim() // Removes leading/trailing whitespace
  .split(/\s+/); // Splits by one or more spaces

console.log(words1);

// best practice

console.log("countries (count):", countries.length);
console.log("first country:", countries[0]);

console.log("webTechs (count):", webTechs.length);
console.log("first webTech:", webTechs[0]);
