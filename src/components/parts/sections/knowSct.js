import "./sections.css";
import "./knowSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { getRandomInteger } from "../individual-functions/get-random-integer";
import { changeOneWordColor } from "../individual-functions/change-word-color";

export const printKnowSct = (sectionName) => {
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
  let sctTitleColorChange = changeOneWordColor(sctTitle);
  sectionTitleDom.innerHTML = sctTitleColorChange;
  sectionTextsDom.append(sectionTitleDom);

  // Section Content
  let sectionContentDiv = document.createElement("div");
  sectionContentDiv.classList.add(`${sectionName}-content`);

  const contentsDirection = data.sections[sectionName].sectionContent;

  const printCategoriesDivs = () => {
    for (const category in data.sections[sectionName].sectionContent) {
      let categoryDivDom = document.createElement("div");
      categoryDivDom.setAttribute("id", `${category}`);
      categoryDivDom.classList.add("know-sct-category");
      sectionContentDiv.append(categoryDivDom);

      let categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("know-category-title");
      categoryTitle.innerText = `${category}:`;
      categoryDivDom.append(categoryTitle);

      if (category === "education") {
        let educationList = document.createElement("ul");
        educationList.setAttribute("id", `${category}-list`);
        categoryDivDom.append(educationList);
        for (const listItem in contentsDirection[`${category}`]) {
          let educationLiElement = document.createElement("li");
          educationLiElement.classList.add("know-li");
          educationLiElement.innerHTML = `
          <p>
          ${contentsDirection[`${category}`][listItem].startDate}-${
            contentsDirection[`${category}`][listItem].endDate
          } 
          </p>
          <p>${contentsDirection[`${category}`][listItem].degree}</p>
          <p>${contentsDirection[`${category}`][listItem].institution}</p>
          `;

          educationList.append(educationLiElement);
        }
      } else if (category === "skills") {
        let skillsList = document.createElement("ul");
        skillsList.setAttribute("id", "skills-list");
        categoryDivDom.append(skillsList);

        for (const skill in contentsDirection[`${category}`]) {
          let skillText = contentsDirection[`${category}`][skill];
          let skillLiElement = document.createElement("li");
          skillLiElement.classList.add("know-li");
          skillLiElement.innerText = skillText;

          skillsList.append(skillLiElement);
        }
      } else if (category === "experience") {
        let experienceList = document.createElement("ul");
        experienceList.setAttribute("id", `${category}-list`);
        categoryDivDom.append(experienceList);
        for (const listItem in contentsDirection[`${category}`]) {
          let experienceLiElement = document.createElement("li");
          experienceLiElement.classList.add("know-li");
          experienceLiElement.innerHTML = `
          <p>
          ${contentsDirection[`${category}`][listItem].startDate}-${
            contentsDirection[`${category}`][listItem].endDate
          } 
          </p>
          <p>${contentsDirection[`${category}`][listItem].position}</p>
          <a href=${contentsDirection[`${category}`][listItem].companyUrl} >${
            contentsDirection[`${category}`][listItem].company
          }</a>
          `;

          experienceList.append(experienceLiElement);
        }
      }
    }
  };
  printCategoriesDivs();

  sectionsDivDom.append(section);

  section.append(sectionTextsDom);
  section.append(sectionContentDiv);

  // add section to DOM
  sectionsDivDom.append(section);
};
