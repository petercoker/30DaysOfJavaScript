Your code is **correct** and is considered the **best practice** for solving this specific logic challenge (reversing without the built-in method).

You correctly identified the key to reversing with a loop: **starting at the end and counting backwards.**

### 🔍 Why your logic is solid

1. **Correct Starting Index:** You used `fruit.length - 1`. This is vital because arrays are zero-indexed. Since there are 4 fruits, the indices are 0, 1, 2, and 3. `fruit.length` is 4, so starting at 3 is exactly right.
2. **The Condition:** `i >= 0` ensures the loop stops only after it has processed the very first item (index 0).
3. **Decrementing:** Using `i--` correctly moves the pointer one step toward the front of the array with every turn.

---

### 💡 A "Pro" Alternative: `unshift()`

While your method is the most common, there is another way to do this using a `for...of` loop. Instead of counting backwards, you can walk forwards through the original array and **push every item to the front** of the new one.

**JavaScript**

```
const fruit = ["banana", "orange", "mango", "lemon"];
let reverseFruit = [];

for (const item of fruit) {
  reverseFruit.unshift(item); // Adds the item to the START of the new array
}

console.log(reverseFruit);
```

#### Why use `push` (your way) vs `unshift`?

* **Your Way (`push`):** Generally **faster** for the computer. Adding to the end of an array is a "cheap" operation.
* **`unshift`:** More readable to some, but "expensive" for the computer because it has to re-index every item in the array every time you add a new one.

---

### ⚠️ A Note on Mutability

In professional development, we often avoid changing the original data. Your code is great because it creates a **new array** (`reverseFruit`) and leaves the original `fruit` array exactly as it was. This is a core "best practice" in modern frameworks like React.

### Summary Comparison

| **Method**                   | **Complexity** | **Pros**                 | **Cons**                                                   |
| ---------------------------------- | -------------------- | ------------------------------ | ---------------------------------------------------------------- |
| **Reverse `for`loop**      | O(n)                 | **Fastest performance.** | Most code to write.                                              |
| **`for...of`+`unshift`** | O(n²)               | Very readable.                 | Slower for very large arrays.                                    |
| **`.reverse()`method**     | O(n)                 | Shortest code.                 | **Modifies the original array**(unless you copy it first). |

**Your approach is the standard "computer science" way to solve this! Would you like to see how to reverse the array "in place" (without creating a second `reverseFruit` array)?**
