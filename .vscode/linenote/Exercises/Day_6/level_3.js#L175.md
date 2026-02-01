Your code is **correct** and will give you the right result, but there is one major "Best Practice" warning you should know about: **Mutation.**

### 1. The "Hidden" Bug: Mutation

In JavaScript, the `.reverse()` method is  **destructive** . This means it doesn't just give you a reversed version; it actually flips the **original** `updatedCountries` array upside down forever.

In professional development (especially in frameworks like React), we try to avoid "mutating" (changing) our original data.

### 2. The Modern Best Practice: `.toReversed()`

To keep your original array safe, you should use the modern `.toReversed()` method, which creates a copy automatically before flipping it.

**JavaScript**

```
// BEST PRACTICE: Original array stays the same, ex9 gets the new data
const ex9 = updatedCountries
  .toReversed()
  .map((c) => c.toUpperCase()); // Since they are already capitalized, let's look at why we map
```

### 3. Do you actually need `.map()` here?

In your code, you use `.map((c) => c.charAt(0).toUpperCase() + c.slice(1))`.

Looking at your `updatedCountries` list, the countries are **already capitalized** (e.g., "Albania").

* If you just want to keep them as they are: You can remove the `.map()`.
* If you want to make them  **ALL CAPS** : Use `.map(c => c.toUpperCase())`.

---

### ✅ The "Senior Developer" Version

If you want to be "bulletproof" (supporting older browsers while staying clean), use the spread operator to copy the array first:

**JavaScript**

```
const ex9 = [...updatedCountries] // 1. Create a shallow copy (prevents mutation)
  .reverse()                       // 2. Reverse the copy
  .map((c) => c.toUpperCase());    // 3. Transform (e.g., to all uppercase)

console.log(ex9);
console.log(updatedCountries); // Original is still in its original order!
```

---

### Summary Comparison

| **Method**       | **Changes Original Array?** | **Modernity**      |
| ---------------------- | --------------------------------- | ------------------------ |
| `.reverse()`         | **Yes (Dangerous!)**        | Legacy / Standard        |
| `[...arr].reverse()` | **No (Safe)**               | Standard Best Practice   |
| `.toReversed()`      | **No (Safe)**               | Modern Standard (ES2023) |

### 🔍 Quick Check on your Capitalization Logic

Your logic `c.charAt(0).toUpperCase() + c.slice(1)` is the classic way to capitalize the first letter. It’s perfect! However, if you know your data is already clean, you can skip that step to make your code run faster.

**Would you like me to show you how to check if the array is already sorted before you try to reverse it?**
