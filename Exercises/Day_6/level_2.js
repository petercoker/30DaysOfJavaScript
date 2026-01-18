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
function getRandomRGBColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return `rgb(${r},${g},${b})`;
}

console.log(getRandomRGBColor());
