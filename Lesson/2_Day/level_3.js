const sentenceWithConjunction =
  "You cannot end a sentence with because because because is a conjunction";

const sentenceAboutLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const countWord = "love";

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const sentenceIncome =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// console.log(sentenceWithConjunction.substring(31, 54));

// const sentenceAboutLoveToLowerCase = sentenceAboutLove.toLowerCase();
// const countWordToLowerCase = countWord.toLowerCase();
// console.log(
//   sentenceAboutLoveToLowerCase.split(countWordToLowerCase).length - 1
// );

// console.log(sentenceWithConjunction.match(/because/g).length);

// // Removing all characters except letters and numbers
console.log(sentence.replace(/[^\p{L}\d\s]+/gu, ""));

// console.log(sentence.replace(/[^a-zA-Z0-9\s]+/g, ""));

// let numbers = sentenceIncome.split("euro");
// let earns = Number(numbers[0].replace(/[^0-9]/g, ""));
// let bonus = Number(numbers[1].replace(/[^0-9]/g, ""));

// let courses = Number(numbers[2].replace(/[^0-9]/g, ""));

// let totalAnnualIncome = earns * 12 + bonus + courses * 12;

// console.log(totalAnnualIncome);

// // 1. Extract all numbers from the string using a simple regular expression.
// //    - \d+ matches one or more digits.
// //    - g flag means "find all occurrences" (global).
// const numbersAsStrings = sentenceIncome.match(/\d+/g);
// // This will give you an array like: ['5000', '10000', '15000']

// // 2. Convert these strings to actual numbers and assign them based on their position in the sentence.
// //    We know from the sentence structure that the first and third numbers are monthly incomes,
// //    and the second number is an annual bonus.
// const monthlySalary = Number(numbersAsStrings[0]);
// const annualBonus = Number(numbersAsStrings[1]);
// const monthlyCoursesIncome = Number(numbersAsStrings[2]);

// // 3. Calculate the total annual income.
// //    Multiply monthly incomes by 12 to convert them to annual figures.
// totalAnnualIncome =
//   monthlySalary * 12 + annualBonus + monthlyCoursesIncome * 12;

// console.log(`The total annual income is: ${totalAnnualIncome} euro`);


