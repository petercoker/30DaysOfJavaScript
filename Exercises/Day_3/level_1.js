// 1. Declare firstName, lastName, country, city, age, isMarried, year variable
//    and assign value to it and use the typeof operator to check different data types.
//    (Declare variables and use typeof to inspect their types)

let firstName = "Peter";
let lastName = "Coker";
let country = "Spain";
let city = "Barcelona";
let age = 31;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
//    (Compare the type of the string '10' with the number 10; do not coerce types)
console.log(typeof "10" === typeof 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

// 4. Boolean value is either true or false.
//    4i. Write three JavaScript statements which provide truthy values.
console.log(Boolean(-1));
console.log(Boolean("Peter Coker"));
console.log(Boolean(35 > 18));
//    4ii. Write three JavaScript statements which provide falsy values.
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(""));

// 5. Figure out the result of the following comparison expressions first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3  true
//    2. 4 >= 3 true
//    3. 4 < 3 true / false
//    4. 4 <= 3 true / false
//    5. 4 == 4 true
//    6. 4 === 4 true
//    7. 4 != 4 false
//    8. 4 !== 4 false
//    9. 4 != '4' false
//    10. 4 == '4' true
//    11. 4 === '4' false
//    12. Find the length of "python" and "jargon" and make a falsy comparison statement.

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const python = "python";
const jargon = "jargon";
console.log(python.length !== jargon.length); // less readable
console.log(python.length > jargon.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12 // false / true
//    2. 4 > 3 && 10 > 12 // false
//    3. 4 > 3 || 10 < 12 // true
//    4. 4 > 3 || 10 > 12 // true
//    5. !(4 > 3) // false
//    6. !(4 < 3) // true
//    7. !(false) // true
//    8. !(4 > 3 && 10 < 12) // false
//    9. !(4 > 3 && 10 > 12) // true
//    10.!(4 === '4') // true
//    11. There is no 'on' in both "dragon" and "python" // true
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
const dragon = "dragon";
const on = "on";
console.log(dragon.includes(on) && python.includes(on));
console.log(!(dragon.includes(on) && python.includes(on))); // correct “There is no 'on' in both 'dragon' and 'python'”

// 7. Use the Date object to do the following activities (do not write solutions here)
//    1. What is the year today?
//    2. What is the month today as a number?
//    3. What is the date today?
//    4. What is the day today as a number?
//    5. What is the hours now?
//    6. What is the minutes now?
//    7. Find out the number of seconds elapsed from January 1, 1970 to now.

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());

const nowInMs = Date.now(); // millisecond since Jan 1, 1970
const nowInSeconds = Math.floor(nowInMs / 1000); //Divide by 1000 to convert to seconds
console.log(nowInSeconds);

// best practice
console.log(Math.floor(Date.now() / 1000));
