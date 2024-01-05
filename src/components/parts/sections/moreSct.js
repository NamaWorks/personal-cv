import "./sections.css";
import "./moreSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { getRandomInteger } from "../individual-functions/get-random-integer";

export const printMoreSct = (sectionName) => {
  let sctTitle = data.sections[sectionName].sectionTitle;
  let sctBgTexts = data.sections[sectionName].sectionBgTexts;
  console.log(sctBgTexts);

  let section = document.createElement("section");
  section.setAttribute("id", `${sectionName}`);

  let sectionTextsDom = document.createElement("div");
  sectionTextsDom.classList.add("section-texts");

  // title
  let sectionTitleDom = document.createElement("h3");
  sectionTitleDom.classList.add("section-title");
  sectionTitleDom.innerText = sctTitle;
  sectionTextsDom.append(sectionTitleDom);

  // Form
  let formDom = document.createElement("form");

  // BG text
  let sectionBgTextDom = document.createElement("h2");
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerText = sctBgTexts.join("\n");

  // Add elements to DOM
  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);
  // add section to DOM
  sectionsDivDom.append(section);
};
