import { countries } from "./countries.js";
import { webTechs } from "./webTechs.js";

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
console.log("countries (count):", countries.length);
console.log("first country:", countries[0]);

console.log("webTechs (count):", webTechs.length);
console.log("first webTech:", webTechs[0]);
