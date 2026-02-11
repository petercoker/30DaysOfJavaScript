The code you wrote (mentally or in your draft) would be **correct** if it follows the math, but there are a few "pro" tips for writing conversion functions that make them much cleaner.

### ✅ The Best Practice Solution

**JavaScript**

```
/**
 * Converts Celsius to Fahrenheit
 * Best Practice: Use camelCase and descriptive parameter names
 */
function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Example usage:
const boilingPointC = 100;
console.log(`${boilingPointC}°C is ${convertCelsiusToFahrenheit(boilingPointC)}°F`);
// Output: 100°C is 212°F
```

---

### 🔍 Why this is the "Senior" way:

1. **Readability** : Using the full word `celsius` as the parameter instead of just `c` makes the function self-explanatory.
2. **Parentheses for Clarity** : While JavaScript follows standard math order (multiplication before addition), using `(celsius * 9/5)` makes it instantly readable for other humans.
3. **No Magic Numbers** : If you were using this in a large app, you might even store `32` or `9/5` as constants, but for a simple function, this is perfectly fine.

---

### 🚀 A Modern Alternative: The One-Liner

In modern JavaScript, since this is a simple "In -> Out" math calculation, many developers use an  **Arrow Function** :

**JavaScript**

```
const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32;
```

---

### 💡 Extra Tip: Handling Decimals

Temperature conversions often result in long decimals (like `98.60000000000001`). To make your output user-friendly, you can combine your function with `.toFixed()`:

**JavaScript**

```
const tempF = convertCelsiusToFahrenheit(37);
console.log(`Body Temp: ${tempF.toFixed(1)}°F`); // "98.6°F"
```

**Would you like to try exercise #12: writing a function to calculate Body Mass Index (BMI)? It involves more complex math (**$BMI = weight / (height \times height)$**).**
