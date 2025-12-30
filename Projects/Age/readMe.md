# Age Input Program

A simple JavaScript program that prompts users to input their age and displays it back to them.

## Description

This program demonstrates basic JavaScript input handling by:

- Prompting two users to enter their ages using the `prompt()` function
- Storing both ages in variables (`myAge` and `yourAge`)
- Displaying both ages in a formatted message using template literals

## Features

- Multiple user inputs using browser prompts
- Variable storage and manipulation
- Template literal string formatting
- Interactive alert display

## How to Use

1. Open `index.html` in your web browser
2. Enter your age when the first prompt appears
3. Enter the second person's age when prompted
4. An alert will display showing both ages in the format:
   ```javascript
   I am [myAge] years old
   You are [yourAge] years old
   ```

## Technologies Used

- HTML5
- JavaScript (Vanilla JS)
- CSS for basic styling

## Code Example

```javascript
let myAge = prompt("Enter my age:");
let yourAge = prompt("Please enter your age:");

alert(`I am ${myAge} years old\nYou are ${yourAge} years old`);
```

## Project Structure

```
Age/
├── index.html
└── script.js
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Made with ❤️ by [Peter Coker](https://github.com/petercoker)
