Your code is **very close** to being perfect! The logic for filtering the countries is excellent, but you are missing the second half of the requirement: **the conditional "if/else" message.**

The prompt asks you to print a specific message if no countries are found. Currently, your code would just print an empty array `[]`.

---

### ✅ The "Best Practice" Solution

To make this correct, we use your `filter` logic and then check the `length` of the result.

**JavaScript**

```
const updatedCountries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];
const searchTerm = "land";

// 1. Filter the array
const landCountries = updatedCountries.filter((country) =>
  country.toLowerCase().includes(searchTerm.toLowerCase())
);

// 2. Check the result and print accordingly
if (landCountries.length > 0) {
  console.log(landCountries); 
} else {
  console.log('All these countries are without land');
}
```

---

### 🔍 Why this is Best Practice

1. **Case Sensitivity** : You correctly used `.toLowerCase()` on both the country and the search term. This is a vital professional habit because it prevents "Finland" from being missed if the user searches for "LAND".
2. **`.filter()` vs `.find()`** : You used `.filter()`, which is correct because the prompt asks for "country or countries" (plural).
3. **The Length Check** : Checking `if (landCountries.length > 0)` is the standard way to see if an array has any contents before acting on it.

---

### 💡 A "Pro" Shortcut: The Ternary Operator

If you want to keep your code very concise, you can use a ternary operator (`? :`) for the print statement:

**JavaScript**

```
console.log(
  landCountries.length > 0 
    ? landCountries 
    : 'All these countries are without land'
);
```

### One Small Detail

In your original code, you named the variable `ex7`. While fine for homework, in a real job, you should name variables based on what they hold, like `landCountries` or `filteredResults`. This makes your code "self-documenting."

**Would you like to see how to modify this to check for countries ending in 'ia' (like Albania, Bolivia, Ethiopia) instead?**
