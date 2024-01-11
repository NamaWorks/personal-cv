import { getRandomInteger } from "./get-random-integer";

export const changeItalic = (string) => {
  let stringArray = string.split("");

  let numberOfLettersChanged = Math.round(string.length * 0.3);

  for (let i = 0; i < numberOfLettersChanged; i++) {
    let randomIndex = getRandomInteger(0, string.length);
    let randomLetter = stringArray[randomIndex];

    if (randomLetter) {
      if (randomLetter.length <= 1) {
        stringArray[randomIndex] =
          "<span class='change-italic'>" + randomLetter + "</span>";
      }
    }
  }
  let joinStringArray = stringArray.join("");
  return joinStringArray;
};
