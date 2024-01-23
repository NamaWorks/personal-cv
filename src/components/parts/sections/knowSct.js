import "./sections.css";
import "./knowSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { getRandomInteger } from "../individual-functions/get-random-integer";
import { changeOneWordColor } from "../individual-functions/change-word-color";

const knowSctBtns = (event) => {
  let parent = event.target.parentElement;
  let knowSectionContentDiv = parent.parentElement;
  let knowSectionDiv = document.querySelector("#knowSection");
  let category = parent.getAttribute("id");
  let sectionContentListDiv = document.querySelector("#list-div");
  const contentsDirection = data.sections.knowSection.sectionContent;
  // console.log(knowSectionDiv);

  let knowList = sectionContentListDiv.querySelector(".know-lists");
  // console.log(knowList);

  knowList.remove();
  if (category === "education") {
    knowList.remove();
    let educationList = document.createElement("ul");
    educationList.setAttribute("id", `${category}-list`);
    educationList.classList.add("know-lists");
    sectionContentListDiv.append(educationList);
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
    knowList.remove();
    let skillsList = document.createElement("ul");
    skillsList.setAttribute("id", "skills-list");
    skillsList.classList.add("know-lists");
    sectionContentListDiv.append(skillsList);

    for (const skill in contentsDirection[`${category}`]) {
      let skillText = contentsDirection[`${category}`][skill];
      let skillLiElement = document.createElement("li");
      skillLiElement.classList.add("know-li");
      skillLiElement.innerText = skillText;

      skillsList.append(skillLiElement);
    }
  } else if (category === "experience") {
    knowList.remove();
    let experienceList = document.createElement("ul");
    experienceList.setAttribute("id", `${category}-list`);
    experienceList.classList.add("know-lists");
    sectionContentListDiv.append(experienceList);
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
};

export const printKnowSct = (sectionName) => {
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

  // Section Content
  let sectionContentDiv = document.createElement("div");
  sectionContentDiv.classList.add(`${sectionName}-content`);

  let sectionContentCategories = document.createElement("div");
  sectionContentCategories.setAttribute("id", "categories-div");
  sectionContentDiv.append(sectionContentCategories);

  let sectionContentListDiv = document.createElement("div");
  sectionContentListDiv.setAttribute("id", "list-div");
  sectionContentDiv.append(sectionContentListDiv);

  const contentsDirection = data.sections[sectionName].sectionContent;

  const printCategoriesDivs = () => {
    for (const category in data.sections[sectionName].sectionContent) {
      let categoryDivDom = document.createElement("div");
      categoryDivDom.setAttribute("id", `${category}`);
      categoryDivDom.classList.add("know-sct-category");
      sectionContentCategories.append(categoryDivDom);

      let categoryTitleButton = document.createElement("button");
      categoryTitleButton.classList.add("know-category-button");
      categoryTitleButton.addEventListener("click", knowSctBtns);
      let categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("know-category-title");
      categoryTitle.innerText = `${category}:`;
      categoryDivDom.append(categoryTitleButton);
      categoryTitleButton.append(categoryTitle);

      if (category === "experience") {
        console.log(sectionContentListDiv);
        let experienceList = document.createElement("ul");
        experienceList.setAttribute("id", `${category}-list`);
        experienceList.classList.add("know-lists");

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
          sectionContentListDiv.append(experienceList);
        }
      }

      // if (category === "education") {
      //   let educationList = document.createElement("ul");
      //   educationList.setAttribute("id", `${category}-list`);
      //   educationList.classList.add("know-lists");
      //   categoryDivDom.append(educationList);
      //   for (const listItem in contentsDirection[`${category}`]) {
      //     let educationLiElement = document.createElement("li");
      //     educationLiElement.classList.add("know-li");
      //     educationLiElement.innerHTML = `
      //     <p>
      //     ${contentsDirection[`${category}`][listItem].startDate}-${
      //       contentsDirection[`${category}`][listItem].endDate
      //     }
      //     </p>
      //     <p>${contentsDirection[`${category}`][listItem].degree}</p>
      //     <p>${contentsDirection[`${category}`][listItem].institution}</p>
      //     `;

      //     educationList.append(educationLiElement);
      //   }
      // } else if (category === "skills") {
      //   let skillsList = document.createElement("ul");
      //   skillsList.setAttribute("id", "skills-list");
      //   skillsList.classList.add("know-lists");
      //   categoryDivDom.append(skillsList);

      //   for (const skill in contentsDirection[`${category}`]) {
      //     let skillText = contentsDirection[`${category}`][skill];
      //     let skillLiElement = document.createElement("li");
      //     skillLiElement.classList.add("know-li");
      //     skillLiElement.innerText = skillText;

      //     skillsList.append(skillLiElement);
      //   }
      // } else if (category === "experience") {
      //   let experienceList = document.createElement("ul");
      //   experienceList.setAttribute("id", `${category}-list`);
      //   experienceList.classList.add("know-lists");
      //   categoryDivDom.append(experienceList);
      //   for (const listItem in contentsDirection[`${category}`]) {
      //     let experienceLiElement = document.createElement("li");
      //     experienceLiElement.classList.add("know-li");
      //     experienceLiElement.innerHTML = `
      //     <p>
      //     ${contentsDirection[`${category}`][listItem].startDate}-${
      //       contentsDirection[`${category}`][listItem].endDate
      //     }
      //     </p>
      //     <p>${contentsDirection[`${category}`][listItem].position}</p>
      //     <a href=${contentsDirection[`${category}`][listItem].companyUrl} >${
      //       contentsDirection[`${category}`][listItem].company
      //     }</a>
      //     `;

      //     experienceList.append(experienceLiElement);
      //   }
      // }
    }
  };
  printCategoriesDivs();

  sectionsDivDom.append(section);

  section.append(sectionTextsDom);
  section.append(sectionContentDiv);

  // add section to DOM
  sectionsDivDom.append(section);
};
