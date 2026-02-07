The logic of your function is **correct** , but your `console.log` contains a small "copy-paste" error from the previous circle exercise!

### 🔍 The Correction

In your output, you labeled it as **"Area of Density."** Density is a measure of mass per unit volume, not an area.

---

### ✅ The "Best Practice" Version

Here is the cleaned-up version with a focus on naming and precision:

**JavaScript**

```
function getDensity(mass, volume) {
  // Defensive check: You can't divide by zero!
  if (volume === 0) return "Volume cannot be zero";
  return mass / volume;
}

// Store the result once to avoid calling the function twice
const densityResult = getDensity(4, 2);

// Correct the label in the log
console.log(`Density of the substance: ${densityResult}`);
```

---

### 🚀 Why these small changes matter:

1. **Divide by Zero** : In math and programming, dividing by zero is a major issue. If `volume` is `0`, JavaScript will return `Infinity`. Adding a quick `if` check makes your code "robust."
2. **Naming Accuracy** : Using a label like "Density of the substance" instead of "Area" ensures your code makes sense to anyone reading your logs.
3. **Dry Principle (Don't Repeat Yourself)** : You declared `const density = getDensity(4, 2)`, but then you called the function again inside the `console.log`. It is better to use the variable you already created!

---

### 💡 Extra Context: Units

In real-world science applications, density usually comes with units (like **kg/m³** or **g/cm³** ). To make your function even better, you could include the units in your return string:

**JavaScript**

```
console.log(`Density: ${densityResult} kg/m³`);
```

**Would you like to try exercise #10: writing a function to calculate the Speed of a moving object (**$speed = distance / time$**)?**
