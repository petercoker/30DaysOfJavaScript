Your code is **correct** and follows  **modern best practices** !

You have successfully applied the logic from the previous exercise to a new requirement. Using `.endsWith()` is the most precise and readable way to solve this specific problem.

### Why this is Best Practice

1. **Correct Tool Selection** : You used `.endsWith()` instead of `.includes()`. This is important because while "Finland" *contains* "land", "India" *ends* with "ia". `.endsWith()` ensures you don't accidentally catch a country where "ia" is in the middle of the name.
2. **Case Insensitivity** : Just like before, converting both sides to `.toLowerCase()` makes your code robust against different typing styles.
3. **Clean Conditionals** : You provided both the standard `if/else` and the ternary operator. In a professional environment, the `if/else` is usually preferred for readability if you're performing an action (like `console.log`), while the ternary is used when assigning a value to a variable.

---

### A Tiny Correction in the Logic

There is one very small "typo" in your prompt's comment (likely from your exercise instructions):

* Your comment says: *"If there is no country containing the word  **'ai'** "*
* Your code correctly checks for  **'ia'** .

In a real-world scenario, if the requirements say "ai" but the goal is "ia", you should stick with the code logic (`ia`) as you did.

---

### 💡 Pro Refinement: The "Reusable" Function

If you were building a real application, you might find yourself checking for different endings (like "land", "ia", or "stan"). Instead of writing a new `filter` every time, you can create a reusable function:

**JavaScript**

```
const filterByEnding = (arr, suffix) => {
  const result = arr.filter(item => 
    item.toLowerCase().endsWith(suffix.toLowerCase())
  );

  return result.length > 0 
    ? result 
    : `No countries end with ${suffix}`;
};

console.log(filterByEnding(updatedCountries1, "ia"));
console.log(filterByEnding(updatedCountries1, "stan"));
```

---

### Summary Checklist:

* **Method** : `.endsWith()` (Perfect)
* **Logic** : `.length > 0` (Perfect)
* **Robustness** : `.toLowerCase()` (Perfect)

**Would you like to try a slightly harder version where you find the country with the most characters in the entire array?**
