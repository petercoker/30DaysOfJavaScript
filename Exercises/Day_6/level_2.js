function generateRandomId(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
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