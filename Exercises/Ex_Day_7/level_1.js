// Still learning - Arrow funcion

// 1. Declare a function _fullName_ and it print out your full name.

// function _fullName_() {
//   console.log("Peter Sonola Coker");
// }

// console.log(_fullName_());

// // best practice
// // 1. Use camelCase for the name
// // 2. Return the value instead of just logging it (more flexible)
// function getFullName() {
//   const firstName = "Peter";
//   const middleName = "Sonola";
//   const lastName = "Coker";
//   return `${firstName} ${middleName} ${lastName}`;
// }

// // Now you can choose to log it, or do something else with it!
// console.log(getFullName());

// 2.Declare a function _fullName_ and now it takes firstName,
// lastName as a parameter and it returns your full - name.

function _fullName_(firstName, lastName) {
  return firstName + lastName;
}

console.log(_fullName_("Peter", "Coker"));

// best practice
// 1. Use camelCase naming (standard JS practice)
// 2. Use Template Literals for clean spacing
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Peter", "Coker")); // Output: "Peter Coker"

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(getFullName("Peter", "Coker"));

// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.

function _addNumbers_(num1, num2) {
  return num1 + num2;
}

console.log("_addNumbers_:", _addNumbers_(2, 2));

// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function getAreaOfRectangle(length, width) {
  return length * width;
}

console.log("getAreaOfRectangle:", getAreaOfRectangle(2, 2));

// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_.
// Write a function which calculates _perimeterOfRectangle_.

function _perimeterOfRectangle_(length, width) {
  return 2 * (length + width);
}

console.log("_perimeterOfRectangle_:", _perimeterOfRectangle_(2, 2));

// Function with many parameters.
function organizeParty(host, coHost, ...h) {
  console.log("The Host is:", host);
  console.log("The Co-Host is:", coHost);
  console.log("The Guest List array is:", h);
}

// Calling the function
organizeParty("Peter", "Sarah", "John", "Kelly", "Jack", "Jill");

console.log("_perimeterOfRectangle_:", _perimeterOfRectangle_(2, 2));

function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);

// 6. A volume of a rectangular prism is calculated as
// follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.

function _volumeOfRectPrism_(length, width, height_) {
  return length * width * height_;
}

console.log("_volumeOfRectPrism_:", _volumeOfRectPrism_(2, 2, 2));

//best practice
// 1. Use camelCase naming (no underscores)
// 2. Use clear, standard parameter names
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// 3. Use Template Literals for the output
const l = 2,
  w = 2,
  h = 2;
console.log(`The volume is: ${volumeOfRectPrism(l, w, h)}`);

// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_

function getAreaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log("getAreaOfCircle:", getAreaOfCircle(2));


//best practice 
function getAreaOfCircle(radius) {
  // Use ** 2 for "squared"
  return Math.PI * radius ** 2;
}

console.log(`Area of Circle: ${getAreaOfCircle(2)}`);

const area = getAreaOfCircle(2);
console.log(area.toFixed(2)); // "12.57"