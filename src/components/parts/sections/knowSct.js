import "./sections.css";
import "./whatSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { getRandomInteger } from "../individual-functions/get-random-integer";

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
  sectionTitleDom.innerText = sctTitle;
  sectionTextsDom.append(sectionTitleDom);

  // section paragraph
  let sectionParagraphDom = document.createElement("p");
  sectionParagraphDom.classList.add("section-paragraph");
  sectionParagraphDom.innerHTML = sctParagraph;
  sectionTextsDom.append(sectionParagraphDom);

  // portfolio grid
  let portfolioDiv = document.createElement("div");
  portfolioDiv.classList.add("portfolio-grid");

  // add portfolio elements
  const createProjectFile = (project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", `${project}`);
    let pName = project.projectName;
    let pYear = project.year;
    let pCategory = project.category;
    let pUrl = project.url;

    let randomNumber = getRandomInteger();
    if (randomNumber > 3) {
      projectDiv.classList.add("project-big");
    }

    let imageUrl01 = data.projects[project].imageUrl;
    let videoUrl01 = data.projects[project].videoUrl;
    // console.log(imageUrl01);

    if (imageUrl01) {
      let imageDom = document.createElement("img");
      imageDom.setAttribute("src", `${imageUrl01}`);
      imageDom.classList.add("project-image");
      projectDiv.append(imageDom);
      let randomNumber = getRandomInteger();
      if (randomNumber > 3) {
        projectDiv.classList.add("project-big");
      }
    } else {
      console.log(`pending to finish this feature`);
      // let videoDom = document.createElement("img");
      // videoDom.setAttribute("iframe", `${videoUrl01}`);
      // projectDiv.append(videoDom);
    }
    portfolioDiv.append(projectDiv);
  };
  for (const project in data.projects) {
    createProjectFile(project);
  }

  // BG text
  let sectionBgTextDom = document.createElement("h2");
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerText = sctBgTexts.join(" ");

  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);

  // add section to DOM
  sectionsDivDom.append(section);
  section.append(portfolioDiv);
};
