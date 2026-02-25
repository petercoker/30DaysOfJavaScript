This is **correct** and shows a great deal of self-correction! You correctly identified why your commented-out line `arr.at(-1)` failed: `arr.at(-1)` returns the **value** of the last element, but a `for` loop needs the **index** (the position) to work.

### 🔍 The Logic Check

* **Manual Logic:** You followed the constraint perfectly by not using `.reverse()`.
* **Index vs. Value:** You caught the mistake where using a value as an iterator would break the loop.
* **Immutability:** You are creating a new array (`reverseArr`) rather than modifying the original one. This is excellent practice.

---

### ✅ The "Best Practice" Refinement

Your logic is 100% sound. To make it "Senior" level, we can optimize the performance. Currently, you use `.push()`, which is fine, but you can also pre-define the array length for better memory management.

**JavaScript**

```
function reverseArray(arr) {
  const reversed = [];
  
  // Starting from the last index (length - 1) down to 0
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  
  return reversed;
}

const original = [1, 2, 3, 4, 5];
console.log(reverseArray(original)); // [5, 4, 3, 2, 1]
```

---

### 🚀 Why your `arr.at(-1)` attempt failed:

You mentioned: `for (let i = arr.at(-1); i >= 0; i--)`.

If `arr = [1, 2, 3, 4, 10]`:

1. `arr.at(-1)` is  **10** .
2. The loop starts at `i = 10`.
3. `arr[10]` is `undefined` because the array only goes up to index 4.
4. That’s why you got `undefined` in your log!

**Remember:** `arr.length - 1` is for the **index** (the "address"); `arr.at(-1)` is for the **data** (the "person" living at that address).

---

### 📊 Evaluating your Coding Style so far:

1. **Analytical:** You are reading your own console logs and figuring out *why* things fail (the `undefined` discovery). This is the #1 skill of a developer.
2. **Constraint-Aware:** You are respecting the "no methods" rule, which shows discipline.
3. **Modern Leanings:** Your instinct to use `.at()` shows you want to write the cleanest code possible.

---

### 💡 A "Functional" Alternative

If you weren't banned from using methods, the most modern "Best Practice" would be:

`return arr.toReversed();` (as we discussed in Ex 20).

**Would you like to try Exercise #7: Declare a function name `capitalizeArray`? It takes an array as a parameter and it returns the array with each element capitalized.**
