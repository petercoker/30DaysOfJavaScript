Actually, you missed the main "challenge" of this prompt!

### 🔍 The Logic Check

The prompt explicitly says: **"without using Math.max method."** Your code uses `Math.max(...arr)`, which is exactly what the exercise is trying to teach you to avoid.

Additionally, the prompt asks for a function that takes **three arguments** , but your code expects a **single array** .

---

### ✅ The "Best Practice" Solution (Manual Comparison)

To find the maximum manually, you need to use `if` statements or the **Ternary Operator** to compare the numbers against each other.

**JavaScript**

```
function findMax(a, b, c) {
  let max = a; // 1. Start by assuming 'a' is the biggest

  // 2. Compare 'max' with 'b'
  if (b > max) {
    max = b;
  }

  // 3. Compare the new 'max' with 'c'
  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(0, 10, 5)); // 10
```

---

### 🚀 Why this is the intended way:

1. **Algorithmic Thinking** : This exercise is designed to teach you how comparison logic works under the hood.
2. **Arguments vs. Arrays** :

- `findMax(a, b, c)` treats the numbers as separate inputs.
- `findMax([0, 10, 5])` treats them as one list.
  The prompt specifically requested **three arguments** .

1. **The "King of the Hill" Logic** : This pattern (setting a variable to the first item and then challenging it with the others) is the standard way to find a maximum or minimum in almost any programming language.

---

### 💡 The "Pro" One-Liner (Ternary Way)

If you want to be fancy and stay away from `Math.max`, you can use nested ternaries:

**JavaScript**

```
const findMax = (a, b, c) => (a > b ? (a > c ? a : c) : (b > c ? b : c));
```

**Would you like to try a version of this that can handle _any_ number of arguments (using the "Rest Parameter" `...args`) without using `Math.max`?**
