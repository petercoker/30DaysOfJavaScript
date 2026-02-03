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


