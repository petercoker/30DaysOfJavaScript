// 1. Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.

// all user to enter string input
// need to store month day using days

const months = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};

// const input = prompt("Enter the month:");

// if (input) {
//   const key = input.trim().toLowerCase();
//   const inputMonth = key.charAt(0).toUpperCase() + key.slice(1);
//   const daysOfTheMonth = months[inputMonth];

//   if (daysOfTheMonth) {
//     console.log(`Enter the month ${daysOfTheMonth}`);
//     console.log(`${daysOfTheMonth} has ${months.displayMonth}`);
//   }
// } else {
//   console.log("Input cancelled or empty");
// }

// Object storing the number of days in each month (default February = 28, leap year handled later)
const months = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};

// Arrow function to check if a given year is a leap year
// Leap year rule: divisible by 4, but not by 100, unless also divisible by 400
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Prompt user to enter a month name
const inputRaw = prompt("Enter the month:");

// Check if user actually entered something (not cancelled or empty)
if (inputRaw) {
  // Normalize input: remove spaces and convert to lowercase for consistent lookup
  const monthKey = inputRaw.trim().toLowerCase();

  // Verify that the entered month exists in our months object
  if (months[monthKey]) {
    // Get default number of days for the month
    let days = months[monthKey];

    // Format month name for display (capitalize first letter)
    const formattedMonth = monthKey.charAt(0).toUpperCase() + monthKey.slice(1);

    // Special case: February → check leap year
    if (monthKey === "february") {
      // Prompt user for a year
      const yearInput = prompt("Enter the year:");
      // Convert year string to integer
      const year = Number(yearInput, 10);

      // Validate year input and adjust days if leap year
      if (!Number.isNaN(year) && isLeapYear(year)) {
        days = 29;
      }
    }

    // Output the result to the console
    console.log(`${formattedMonth} has ${days} days.`);
  } else {
    // If month not found in object
    console.log("Invalid month entered.");
  }
} else {
  // If user cancelled or left input blank
  console.log("Input cancelled.");
}
