// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let input = prompt("Enter your score:");
if (Number.isNaN(input)) {
  alert("Please enter a valid number");
} else {
  let score = Number(input);
  switch (true) {
    case score >= 80 && score <= 100:
      alert("A");
      break;
    case score >= 70 && score <= 89:
      alert("B");
      break;
    case score >= 60 && score <= 69:
      alert("C");
      break;
    case score >= 50 && score <= 59:
      alert("D");
      break;
    case score >= 0 && score <= 49:
      alert("F");
      break;
    default:
      alert("Score out of range");
      break;
  }
}

// best practice
input = prompt("Enter your score:");
const score = Number(input);

if (Number.isNaN(score)) {
  alert("Please enter a valid number");
} else if (score >= 80 && score <= 100) {
  alert("A");
} else if (score >= 70 && score <= 79) {
  alert("B");
} else if (score >= 60 && score <= 69) {
  alert("C");
} else if (score >= 50 && score <= 59) {
  alert("D");
} else if (score >= 0 && score <= 49) {
  alert("F");
} else {
  alert("Score out of range");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// const input2 = prompt("Enter the season");
// const season = input2.toLowerCase();
// console.log(season);
// switch (season) {
//   case season === "september" || season === "october" || season === "november":
//     alert("Autumn");
//     break;
//   case season === "december" || season === "january" || season === "february":
//     alert("Winter");
//     break;
//   case season === "march" || season === "april" || season === "may":
//     alert("Spring");
//     break;
//   case season === "june" || season === "july" || season === "august":
//     alert("Summer");
//     break;
//   default:
//     alert("Please enter a valid season");
//     break;
// }

const Autumn = ["september", "october", "november"];
const Winter = ["december", "january", "february"];
const Spring = ["march", "april", "may"];
const Summer = ["june", "july", "august"];
const input2 = prompt("Enter the season");
const season = input2 ? input2.toLowerCase() : ""; // guard against cancel/null before calling toLowercase()

switch (season) {
  case "september":
  case "october":
  case "november":
    alert("Autumn");
    break;
  case "december":
  case "january":
  case "february":
    alert("Winter");
    break;
  case "march":
  case "april":
  case "may":
    alert("Spring");
    break;
  case "june":
  case "july":
  case "august":
    alert("Summer");
    break;
  default:
    alert("Please enter a valid month");
    break;
}

switch (season) {
  case Autumn.includes(season):
    alert("Autumn");
    break;
  case Winter.includes(season):
    alert("Winter");
    break;
  case Spring.includes(season):
    alert("Spring");
    break;
  case Summer.includes(season):
    alert("Summer");
    break;
  default:
    alert("Please enter a valid month");
    break;
}

if (season === "september" || season === "october" || season === "november") {
  alert("Autumn");
} else if (
  season === "december" ||
  season === "january" ||
  season === "february"
) {
  alert("Winter");
} else if (season === "march" || season === "april" || season === "may") {
  alert("Spring");
} else if (season === "june" || season === "july" || season === "august") {
  alert("Summer");
} else {
  alert("Please enter a valid season");
}

if (Autumn.includes(season)) {
  alert("Autumn");
} else if (Winter.includes(season)) {
  alert("Winter");
} else if (Spring.includes(season)) {
  alert("Spring");
} else if (Summer.includes(season)) {
  alert("Summer");
} else {
  alert("Please enter a valid month");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekendDays = ["Saturday", "Sunday"];
input = prompt("Enter the day:");

const day = input ? input[0].toUpperCase() + input.slice(1).toLowerCase() : ""; // guard against cancel/null

console.log(`What is the day today? ${day}`);
if (workingDays.includes(day)) {
  console.log(`${day} is a working day.`);
} else if (weekendDays.includes(day)) {
  console.log(`${day} is a weekend.`);
} else {
  console.log("Enter a valid day");
}

// 1. Check if input exists (handles Null)
if (input) {
  // 2. Normalize input: Remove whitescpace and convert to lowercase
  const normalizeDay = input.trim().toLowerCase();

  //3. Create a 'Display' version
  const displayDay =
    normalizeDay.charAt(0).toUpperCase() + normalizeDay.slice(1);
  //M + onday

  console.log(`What is the day today? ${displayDay}`);

  // 4. Logic check
  if (workingDays.includes(displayDay)) {
    console.log(`${displayDay} is a working day.`);
  } else if (weekendDays.includes(displayDay)) {
    console.log(`${displayDay} is a weekend.`);
  } else {
    console.log("Enter a valid day");
  }
} else {
  console.log("Input cancelled or empty.");
}

// other ways
const dayType = {
  monday: "a working day",
  tuesday: "a working day",
  wednesday: "a working day",
  thursday: "a working day",
  friday: "a working day",
  saturday: "a weekend",
  sunday: "a weekend",
};

input = prompt("Enter the day:");

if (input) {
  const key = input.trim().toLowerCase();
  const result = dayType[key]; // O(1) Lookup speed

  // Capitalize for display
  const displayDay = key.charAt(0).toUpperCase() + key.slice(1);

  console.log(`What is the day today? ${displayDay}`);

  if (result) {
    console.log(`${displayDay} is ${result}.`);
  } else {
    console.log("Enter a valid day.");
  }
}
