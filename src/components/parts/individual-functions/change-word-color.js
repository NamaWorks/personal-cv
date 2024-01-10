import { getRandomInteger } from "./get-random-integer";

export const changeOneWordColor = (string) => {
  let wordsArray = string.split(" ");
  // console.log(wordsArray);
  let randomInteger = getRandomInteger(0, wordsArray.length - 1);
  // console.log(randomInteger);
  let randomWord = wordsArray[randomInteger];
  // console.log(randomWord);
  let coloredString = string.replace(
    randomWord,
    "<span class = 'change-word-color'>" + randomWord + "</span>"
  );
  // console.log(coloredString);
  return coloredString;
};
