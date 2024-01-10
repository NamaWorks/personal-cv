import { getRandomInteger } from "./get-random-integer";

export const changeOneLetterItalic = (string) => {
  let numberOfLettersChanged = Math.round(string.length * 0.3);
  console.log(numberOfLettersChanged);
  let randomIndex = getRandomInteger(0, string.length);
  console.log(randomIndex);
  let randomLetter = string[randomIndex];
  console.log(randomLetter);
  let changedString = string.replace(
    randomLetter,
    "<span class='italic-letter'>" + randomLetter + "</span>"
  );
  console.log(changedString);
};
