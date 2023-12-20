import "./sections.css";
import data from "../../data/data";
import { sectionsDivDom } from "../../data/global_variables";

import { app } from "../../data/global_variables";

export const printSections = (sectionName) => {
  const sctTitle = data.sections[sectionName].sectionTitle;
  const sctParagraph = data.sections[sectionName].sectionParagraph;
  const sctBgTexts = data.sections[sectionName].sectionBgTexts;

  let section = document.createElement("section");
  section.setAttribute("id", `${sectionName}`);

  let sectionTextsDom = document.createElement("div");
  sectionTextsDom.classList.add("section-texts");

  if (sctTitle) {
    let sectionTitleDom = document.createElement("h3");
    sectionTitleDom.classList.add("section-title");
    sectionTitleDom.innerText = sctTitle;
    sectionTextsDom.append(sectionTitleDom);
  }

  let sectionBgTextDom = document.createElement("h2");
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerText = sctBgTexts.join(" ");

  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);

  if (sctParagraph) {
    let sectionParagraphDom = document.createElement("p");
    sectionParagraphDom.classList.add("section-paragraph");
    sectionParagraphDom.innerHTML = sctParagraph;
    sectionTextsDom.append(sectionParagraphDom);
  }
};

export const printSectionsFromData = (arr) => {
  sectionsDivDom.setAttribute("id", "div-for-x-scroll");
  for (const section in arr) {
    printSections(section);
  }
  app.append(sectionsDivDom);
};

const addSideScroll = (element) => {
  element.addEventListener("wheel", (event) => {
    event.preventDefault();

    element.scrollBy({
      left: event.deltaY < 0 ? -200 : 200,
    });
  });
};
addSideScroll(sectionsDivDom);

const getCurrentWeekDay = () => {
  let currentDate = new Date();
  let weekDay = currentDate.getDay();
  return weekDay;
};
const printDailyMsg = () => {
  let dayNumber = getCurrentWeekDay();
  let dailyMsg = data.dailyMessages[dayNumber];
  console.log(dailyMsg);
  let dailyMsgDom = document.createElement("h3");
  dailyMsgDom.innerText = dailyMsg;
  dailyMsgDom.setAttribute("id", "daily-msg");
  app.append(dailyMsgDom);
};
printDailyMsg();
