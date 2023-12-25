import "./sections.css";
import data from "../../data/data";
import { sectionsDivDom } from "../../data/global_variables";

import { app } from "../../data/global_variables";

// export const printSections = (sectionName) => {
//   let sctTitle = data.sections[sectionName].sectionTitle;
//   let sctParagraph = data.sections[sectionName].sectionParagraph;
//   let sctBgTexts = data.sections[sectionName].sectionBgTexts;
//   let sctClients = data.sections[sectionName].clients;
//   let projects = data.projects;

//   let section = document.createElement("section");
//   section.setAttribute("id", `${sectionName}`);

//   let sectionTextsDom = document.createElement("div");
//   sectionTextsDom.classList.add("section-texts");

//   if (sctTitle) {
//     let sectionTitleDom = document.createElement("h3");
//     sectionTitleDom.classList.add("section-title");
//     sectionTitleDom.innerText = sctTitle;
//     sectionTextsDom.append(sectionTitleDom);
//   }

//   let sectionBgTextDom = document.createElement("h2");
//   sectionBgTextDom.classList.add("bg-text");
//   sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
//   sectionBgTextDom.innerText = sctBgTexts.join(" ");

//   sectionsDivDom.append(section);
//   section.append(sectionTextsDom);
//   section.append(sectionBgTextDom);

//   if (sctParagraph) {
//     let sectionParagraphDom = document.createElement("p");
//     sectionParagraphDom.classList.add("section-paragraph");
//     sectionParagraphDom.innerHTML = sctParagraph;
//     sectionTextsDom.append(sectionParagraphDom);
//   }
// };

// export const printSectionsFromData = (arr) => {
//   sectionsDivDom.setAttribute("id", "div-for-x-scroll");
//   for (const section in arr) {
//     printSections(section);
//   }
//   app.append(sectionsDivDom);
// };
