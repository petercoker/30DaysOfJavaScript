It is **correct** in its logic (it runs and returns a value), but it is **not best practice** for two specific reasons: **spacing** and **modern syntax** .

### 🔍 What’s missing?

If you run your current code, the output will be `"PeterCoker"`. Because you are adding the two strings directly, there is no space between the names.

---

### ✅ The Best Practice Version

In modern JavaScript (ES6+), we use **Template Literals** (backticks) to join strings. This makes it much easier to handle spaces and looks a lot cleaner.

**JavaScript**

```
// 1. Use camelCase naming (standard JS practice)
// 2. Use Template Literals for clean spacing
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Peter", "Coker")); // Output: "Peter Coker"
```

---

### 🚀 Why this is better:

1. **Readability** : `${firstName} ${lastName}` looks exactly like the result you want. You don't have to keep track of plus signs and empty quotes (`+ " " +`).
2. **Naming Convention** : As we discussed before, `_fullName_` with underscores is usually reserved for very specific internal "private" variables in JavaScript. Standard functions should use `camelCase` (e.g., `fullName` or `getFullName`).
3. **Flexibility** : By returning the value instead of logging it inside the function, you can use that name anywhere—in an email, on a dashboard, or in an alert.

---

### 💡 Pro Tip: The Arrow Function

Since this is a very simple function that just returns a value, a "Senior" best practice would be to use a **concise arrow function** . It does the exact same thing but in one line:

**JavaScript**

```
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(getFullName("Peter", "Coker"));
```

**Would you like to see how to add a "Default Parameter" so that if someone forgets to provide a last name, the function doesn't break?**
