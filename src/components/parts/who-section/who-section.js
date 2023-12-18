import "./who-section.css";
import data from "../../data/data";

import { app } from "../../data/global_variables";

export const printSection = (sectionName) => {
  const sctTitle = data.sections[sectionName].sectionTitle;
  const sctParagraph = data.sections[sectionName].sectionParagraph;
  const sctBgTexts = data.sections[sectionName].sectionBgTexts;

  let section = document.createElement("section");

  let sectionTextsDom = document.createElement("div");
  sectionTextsDom.classList.add("section-texts");

  let sectionTitleDom = document.createElement("h3");
  sectionTitleDom.classList.add("section-title");
  sectionTitleDom.innerText = sctTitle;
  sectionTextsDom.append(sctTitle);

  let sectionParagraphDom = document.createElement("p");
  sectionParagraphDom.classList.add("section-paragraph");
  sectionParagraphDom.innerText = sctParagraph;
  sectionTextsDom.append(sectionParagraphDom);

  let sectionBgTextDom = document.createElement("h2");
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.innerText = sctBgTexts;

  app.append(section);
  section.append(sectionTextsDom);
  sectionTextsDom.append(sectionTitleDom);
  sectionTextsDom.append(sectionParagraphDom);
  section.append(sectionBgTextDom);
};
