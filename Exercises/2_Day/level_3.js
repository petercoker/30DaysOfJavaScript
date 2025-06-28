const sentenceWithConjunction =
  "You cannot end a sentence with because because because is a conjunction";

const sentenceAboutLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const countWord = "love";

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentenceWithConjunction.substring(31, 54));

const sentenceAboutLoveToLowerCase = sentenceAboutLove.toLowerCase();
const countWordToLowerCase = countWord.toLowerCase();
console.log(
  sentenceAboutLoveToLowerCase.split(countWordToLowerCase).length - 1
);

console.log(sentenceWithConjunction.match(/because/g).length);

// Removing all characters except letters and numbers
console.log(sentence.replace(/[^\p{L}\d\s]+/gu, ""));

console.log(sentence.replace(/[^a-zA-Z0-9\s]+/g, ""));

// SECTION level 3 exercise 4
let questionText = "1 ding ?";
console.log(questionText.match(/\d+/)[0]);
