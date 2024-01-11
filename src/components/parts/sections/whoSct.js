import "./sections.css";
import "./whoSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { changeOneWordColor } from "../individual-functions/change-word-color";
import { changeItalic } from "../individual-functions/change-to-italic";

export const printWhoSct = (sectionName) => {
  let sctTitle = data.sections[sectionName].sectionTitle;
  let sctParagraph = data.sections[sectionName].sectionParagraph;
  let sctBgTexts = data.sections[sectionName].sectionBgTexts;

  let section = document.createElement("section");
  section.setAttribute("id", `${sectionName}`);
  section.classList.add("section");

  let sectionTextsDom = document.createElement("div");
  sectionTextsDom.classList.add("section-texts");

  // title
  let sectionTitleDom = document.createElement("h3");
  sectionTitleDom.classList.add("section-title");
  let sctTitleColorChange = changeOneWordColor(sctTitle);
  sectionTitleDom.innerHTML = sctTitleColorChange;
  sectionTextsDom.append(sectionTitleDom);

  // BG text
  let sectionBgTextDom = document.createElement("h2");
  let sctBgTextsItalic = changeItalic(sctBgTexts);
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerHTML = sctBgTextsItalic;

  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);

  // section paragraph
  let sectionParagraphDom = document.createElement("p");
  sectionParagraphDom.classList.add("section-paragraph");
  sectionParagraphDom.innerHTML = sctParagraph;
  sectionTextsDom.append(sectionParagraphDom);

  // add section to DOM
  sectionsDivDom.append(section);
};
