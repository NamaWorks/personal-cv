import { getRandomInteger } from "./get-random-integer";

export const changeWordColor = (string) => {
  let min = 0;
  let max = string.length;

  for (let i = 0; i < array.length; i++) {
    let randomInteger = getRandomInteger(firstIndex, max);
    console.log(randomInteger);

    let dividedString = string.split(" ");
    console.log(dividedString);

    let selectedWord = dividedString[randomInteger];
    selectedWord.classList.add("aqua-word");
  }
};
