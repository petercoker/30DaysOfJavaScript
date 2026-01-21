Your code is a good start, but as it is currently written, it contains **two errors** that will prevent it from working, and it doesn't quite finish the job of "finding the country."

### 1. The Problems in the Current Code

1. **Variable Name Mismatch:** You defined the array as `updatedCountries` but tried to map over a variable called `countries`.
2. **`Math.max` and Arrays:** `Math.max` cannot read an array directly. If you pass it an array, it returns `NaN` (Not a Number). You must use the **Spread Operator** (`...`) to "pour" the numbers out of the array into the function.
3. **The Result:** Even if fixed, your code only gives you the **number** (e.g., `8`), not the name of the country (e.g., `"Ethiopia"`).

---

### ✅ The "Best Practice" Way: `.reduce()`

In professional JavaScript, when you need to find a single "winner" from a list (the biggest, the smallest, the highest sum), we use the **`.reduce()`** method. It compares each country to the "current longest" and keeps the winner.

**JavaScript**

```
const updatedCountries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const longestCountry = updatedCountries.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestCountry); // Output: "Ethiopia"
```

#### Why this is Best Practice:

* **Efficiency:** It only goes through the list  **once** . Your method (Map + Max) has to go through the list twice.
* **Completeness:** It returns the actual string ("Ethiopia"), which is usually what "find the country" implies.
* **Cleanliness:** No extra arrays (like `updatedCountriesLength`) are created in memory.

---

### 🔍 How `.reduce()` works here:

Think of it like a "King of the Hill" game:

| **Round** | **Current Longest (longest)** | **Next Challenger (current)** | **Winner**                 |
| --------------- | ----------------------------------- | ----------------------------------- | -------------------------------- |
| 1               | ""                                  | "Albania" (7)                       | "Albania"                        |
| 2               | "Albania" (7)                       | "Bolivia" (7)                       | "Albania" (stays same)           |
| 3               | "Albania" (7)                       | "Ethiopia" (8)                      | **"Ethiopia"**(new winner) |
| 4               | "Ethiopia" (8)                      | "Japan" (5)                         | "Ethiopia"                       |

---

### 🛠️ If you want to fix your specific version

If you prefer your original logic, here is how to make it work using the **Spread Operator** and  **`find`** :

**JavaScript**

```
// 1. Get the max length (Use ... to spread the array)
const lengths = updatedCountries.map(c => c.length);
const maxLength = Math.max(...lengths); 

// 2. Find the country that has that length
const winner = updatedCountries.find(c => c.length === maxLength);

console.log(winner); // "Ethiopia"
```

### Summary Comparison

| **Method**               | **Complexity** | **Pros**                                    | **Cons**                             |
| ------------------------------ | -------------------- | ------------------------------------------------- | ------------------------------------------ |
| **`reduce`**           | Low (O(n))           | **Best Practice** . Fast, returns the name. | Slightly harder to read for beginners.     |
| **`map`+`Math.max`** | Medium (O(2n))       | Easy to understand.                               | Slow on huge lists; only gives the number. |
| **`sort`**             | High (O(n log n))    | Easy one-liner.                                   | Slow; changes the original array order.    |

**Would you like to see how to handle a "tie"—for example, if two countries both have 8 characters?**
