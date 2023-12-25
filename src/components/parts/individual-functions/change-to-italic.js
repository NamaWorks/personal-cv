import { getRandomInteger } from "./get-random-integer";

export const changeToItalic = (element) => {
  console.log(element.innerText);

  let stringLength = element.length;
  let numberOfItalics = Math.round((stringLength * 20) / 100);

  for (let i = 0; i > stringLength; i++) {
    let randomInteger = getRandomInteger(0, stringLength);
    let newString =
      element.slice(0, randomInteger) +
      `<span class="italic">` +
      element.slice(randomInteger, randomInteger + 1) +
      `</span>` +
      element.slice(randomInteger + 1);
    console.log(newString);
    element = newString;
  }
};
