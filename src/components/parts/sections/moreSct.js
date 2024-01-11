import "./sections.css";
import "./moreSct.css";
import data from "../../data/data";
import { sectionsDivDom, app } from "../../data/global_variables";
import { getRandomInteger } from "../individual-functions/get-random-integer";
import { changeOneWordColor } from "../individual-functions/change-word-color";
import { changeItalic } from "../individual-functions/change-to-italic";

export const printMoreSct = (sectionName) => {
  let sctTitle = data.sections[sectionName].sectionTitle;
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

  // Form and Social Links
  let moreSectionContent = document.createElement("div");
  moreSectionContent.classList.add(`${sectionName}-content`);
  let formDom = document.createElement("form");
  formDom.setAttribute("id", "contact-form");

  //* MAIL INPUT
  let mailInputLabel = document.createElement("label");
  let mailInputForm = document.createElement("input");
  mailInputForm.type = "mail";
  mailInputForm.setAttribute("id", "mail-input");
  mailInputLabel.innerText = "your@mail.com";
  mailInputLabel.setAttribute("for", mailInputForm.getAttribute("id"));
  mailInputLabel.setAttribute(
    "id",
    mailInputForm.getAttribute("id") + "-label"
  );

  //* SUBJECT INPUT
  let subjectInputLabel = document.createElement("label");
  let subjectInputForm = document.createElement("input");
  subjectInputForm.type = "text";
  subjectInputForm.setAttribute("id", "subject-input");
  subjectInputLabel.innerText = "Subject";
  subjectInputLabel.setAttribute("for", subjectInputForm.getAttribute("id"));
  subjectInputLabel.setAttribute(
    "id",
    subjectInputForm.getAttribute("id") + "-label"
  );

  //* DESCRIPTION INPUT
  let descriptionInputLabel = document.createElement("label");
  let descriptionInputForm = document.createElement("textarea");
  // descriptionInputForm.type = "text";
  descriptionInputForm.setAttribute("id", "description-input");
  descriptionInputLabel.innerText = "What do you need?";
  descriptionInputLabel.setAttribute(
    "for",
    descriptionInputForm.getAttribute("id")
  );
  descriptionInputLabel.setAttribute(
    "id",
    descriptionInputForm.getAttribute("id") + "-label"
  );

  //* SUBMIT BUTTON
  let submitButtonLabel = document.createElement("label");
  let submitButtonForm = document.createElement("button");
  submitButtonLabel.innerText = "submit";
  let submitButtonInnerP = document.createElement("p");
  submitButtonInnerP.innerText = "Submit";
  submitButtonForm.append(submitButtonInnerP);
  submitButtonForm.setAttribute("id", "submit-button");
  submitButtonLabel.setAttribute("for", submitButtonForm.getAttribute("id"));
  submitButtonLabel.setAttribute(
    "id",
    submitButtonForm.getAttribute("id") + "-label"
  );

  // OTHER LINKS
  const createSocialLinks = () => {
    let socialLinksDiv = document.createElement("div");
    socialLinksDiv.setAttribute("id", "social-links");
    moreSectionContent.append(socialLinksDiv);
    for (const socialMedia in data.sections.moreSection.otherLinks) {
      let socialMediaLinkDom = document.createElement("a");
      socialMediaLinkDom.innerText = socialMedia;
      socialMediaLinkDom.href =
        data.sections.moreSection.otherLinks[socialMedia];

      socialLinksDiv.append(socialMediaLinkDom);
    }
  };

  // BG text
  let sectionBgTextDom = document.createElement("h2");
  let sctBgTextsItalic = changeItalic(sctBgTexts);
  sectionBgTextDom.classList.add("bg-text");
  sectionBgTextDom.setAttribute("id", `bg-text-${sectionName}`);
  sectionBgTextDom.innerHTML = sctBgTextsItalic;

  // Add elements to DOM
  sectionsDivDom.append(section);
  section.append(sectionTextsDom);
  section.append(sectionBgTextDom);
  //? FORM ELEMENTS PRINTED IN DOM
  section.append(moreSectionContent);
  moreSectionContent.append(formDom);
  formDom.append(mailInputLabel);
  formDom.append(mailInputForm);
  formDom.append(subjectInputLabel);
  formDom.append(subjectInputForm);
  formDom.append(descriptionInputLabel);
  formDom.append(descriptionInputForm);
  formDom.append(submitButtonLabel);
  formDom.append(submitButtonForm);
  createSocialLinks();
  // add section to DOM
  sectionsDivDom.append(section);
};
