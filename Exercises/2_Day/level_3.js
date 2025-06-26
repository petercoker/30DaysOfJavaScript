const sentenceWithConjunction =
  "You cannot end a sentence with because because because is a conjunction";

const sentenceAboutLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const countWord = "love";

console.log(sentenceWithConjunction.substring(31, 54));

const sentenceAboutLoveToLowerCase = sentenceAboutLove.toLowerCase();
const countWordToLowerCase = countWord.toLowerCase();
console.log(
  sentenceAboutLoveToLowerCase.split(countWordToLowerCase).length - 1
);

// SECTION level 3 exercise 1
console.log(sentenceWithConjunction.match(/because/g).length);
