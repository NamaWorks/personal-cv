import "./sections.css";
import "./whatSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";

export const printWhatSct = (sectionName) => {
  let sctTitle = data.sections[sectionName].sectionTitle;
  let sctParagraph = data.sections[sectionName].sectionParagraph;
  let sctBgTexts = data.sections[sectionName].sectionBgTexts;

  let section = document.createElement("section");
  section.setAttribute("id", `${sectionName}`);

  let sectionTextsDom = document.createElement("div");
  sectionTextsDom.classList.add("section-texts");

  // title
  let sectionTitleDom = document.createElement("h3");
  sectionTitleDom.classList.add("section-title");
  sectionTitleDom.innerText = sctTitle;
  sectionTextsDom.append(sectionTitleDom);

  // BG text
  let sectionBgTextDom = document.createElement("h2");
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerText = sctBgTexts.join(" ");

  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);

  // section paragraph
  let sectionParagraphDom = document.createElement("p");
  sectionParagraphDom.classList.add("section-paragraph");
  sectionParagraphDom.innerHTML = sctParagraph;
  sectionTextsDom.append(sectionParagraphDom);

  // add section to DOM
  sectionsDivDom.setAttribute("id", "div-for-x-scroll");
  sectionsDivDom.append(section);
};
