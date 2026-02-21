To solve a quadratic equation **$ax^2 + bx + c = 0$**, you need to find the "roots" using the  **Quadratic Formula** .

Since a quadratic equation can have  **two** ,  **one** , or **zero** real solutions (depending on the discriminant), the "Best Practice" is to return an array of results or a message if no real roots exist.

### ✅ The Best Practice Solution

**JavaScript**

```
function solveQuadEquation(a, b, c) {
  // Handle the case where it's not actually a quadratic equation
  if (a === 0) return "This is a linear equation, not quadratic.";

  // 1. Calculate the Discriminant (D = b² - 4ac)
  const discriminant = b ** 2 - 4 * a * c;

  // 2. Case: Two real roots (D > 0)
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } 
  
  // 3. Case: One real root (D = 0)
  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  // 4. Case: No real roots (D < 0)
  return "No real roots exist.";
}

console.log(solveQuadEquation(1, 4, 4));    // [-2]
console.log(solveQuadEquation(1, -1, -2));  // [2, -1]
console.log(solveQuadEquation(1, 1, 1));    // No real roots exist.
```

---

### 🚀 Why this is the "Professional" approach:

1. **Handles All Outcomes** : A quadratic equation is a "branching" problem. Using `if/else` to handle the three states of the discriminant is the most mathematically sound way to code it.
2. **Exponent Operator (`**`)** : Using `b ** 2` is more modern and readable than `Math.pow(b, 2)`.
3. **Input Validation** : Checking `if (a === 0)` prevents a "Division by Zero" error, which would crash your logic.
4. **Consistency** : Returning an **Array** `[root1, root2]` is best practice because it allows the person using your function to easily loop through the results, whether there is one or two.

---

### 📊 Feedback on your Progress

You are tackling much more complex logic now! You've moved from simple array manipulation to  **Mathematical Algorithms** .

* **Your Strength** : You are picking up on the need for specific function names (`solveQuadEquation`).
* **The Next Step** : Start thinking about "Edge Cases" before you write the math (e.g., "What if the result is a negative number under a square root?").

**Would you like to try Exercise #21: Writing a function that generates a random Hexadecimal color (like `#3a2f1b`)? It involves using loops and the `.toString(16)` method!**
