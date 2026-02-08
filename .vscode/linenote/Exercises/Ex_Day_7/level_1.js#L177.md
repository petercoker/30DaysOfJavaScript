Actually, you caught yourself in a little "logic flip!"

The prompt asked for a function to calculate **Speed** , but you wrote a function that calculates **Distance** .

### 🔍 The Correction

In physics, the relationship is:

- **Speed** = Distance / Time
- **Distance** = Speed **$\times$** Time

Your code correctly calculates distance, but it doesn't match the prompt's requirement for a speed calculator.

![Image of speed distance time triangle formula](https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT_8HjCMJWp_g9g_KpCv-NWH-hbiDVAx6vj7dtHI0nFA9TpD0VrJBlah6NPdF9ZPazqJvFflqCz1F_nb8aFNQkrwQm3fLH8dLsWr6KYxGv9vIZGjU8)**Shutterstock**

** Explore **

---

### ✅ The "Best Practice" Solution (Calculating Speed)

**JavaScript**

```
// 1. Rename to match the actual goal
function getSpeed(distance, time) {
  // 2. Defensive check: Time cannot be zero (division by zero error)
  if (time === 0) return "Time cannot be zero";

  return distance / time;
}

const distance = 120;
const time = 20;
const speed = getSpeed(distance, time);

// 3. Use descriptive labels in your logs
console.log(`Speed: ${speed} km/h`);
```

---

### 🚀 Why this is the "Senior" way:

1. **Semantic Naming** : The function name `getSpeed` now matches exactly what the math is doing inside.
2. **Validation** : Just like with Density, checking if `time` is `0` prevents your program from returning `Infinity`, which could crash or break parts of a larger application.
3. **Variable Reuse** : Defining `distance` and `time` as variables before passing them into the function makes the code much easier to read and update later.

---

### 💡 Physics Tip

When you log these out, adding a unit (like **km/h** or **mph** ) makes the data much more meaningful to a user!

**Would you like to try exercise #11: writing a function to calculate Weight (**$weight = mass \times gravity$**)?**
