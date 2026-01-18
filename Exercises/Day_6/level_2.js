// 1. Develop a small script which generate any number of characters random
// id: fe3jo1gl124g
// id: xkqci4utda1lmbelpkm03rba

function generateRandomId(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    // Pick a random character from the pool
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Examples from your request:
console.log(generateRandomId(12)); // e.g., "fe3jo1gl124g"
console.log(generateRandomId(24)); //

// 2. Write a script which generates a random hexadecimal number.
// e.g '#ee33df'
function generateHex(length = 6) {
  const hexChars = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    result += hexChars.charAt(randomIndex);
  }

  return result;
}

console.log(generateHex(6)); // Example output: "a2c4e6"

// Alternative
const randomHex = () => {
  // Generate a random large number and convert to Hex
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);

  // Ensure it's 6 characters long (pad with 0s if it's too short)
  return hex.padStart(6, "0");
};

console.log(randomHex()); // Example output: "3f5a1b"

// 3. Write a script which generates a random rgb color number.
// function getRandomRGBColor() {
//   let r = Math.floor(Math.random() * 256); // Random between 0-255
//   let g = Math.floor(Math.random() * 256); // Random between 0-255
//   let b = Math.floor(Math.random() * 256); // Random between 0-255
//   return `rgb(${r},${g},${b})`;
// }

// console.log(getRandomRGBColor());

// best practice
const rgbColorLimit = 256;
const random255 = (rgbColorLimit = 256) =>
  Math.floor(Math.random() * rgbColorLimit);

function getRandomRGBColor() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
}

console.log(getRandomRGBColor());

// one linear
const randomRGB = () =>
  `rgb(${Array.from({ length: 3 }, () => Math.floor(Math.random() * 256)).join(
    ", "
  )})`;

console.log(randomRGB());

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// wrong
const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const character = "K";

function generateNewCountries(countries, character) {
  countries.sort();

  const filteredCountriesIndex = countries.findIndex((item) =>
    item.startsWith(character)
  );

  const result =
    filteredCountriesIndex === -1
      ? countries
      : countries.slice(0, filteredCountriesIndex);

  return result;
}

// Examples from your request:
console.log(generateNewCountries(countries, "k"));

// The "Best Practice" way:
const upperCaseCountries = countries.map((country) => country.toUpperCase());

console.log(upperCaseCountries);
