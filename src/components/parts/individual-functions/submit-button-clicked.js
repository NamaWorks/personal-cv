import { app } from "../../data/global_variables";

export const popupCreation = () => {
  // popupCreation
  if (!document.querySelector("#pop-up")) {
    let popUpDom = document.createElement("div");
    popUpDom.setAttribute("id", "pop-up");
    let textDivPopUp = document.createElement("div");
    textDivPopUp.setAttribute("id", "pop-upt-text");
    let textPopUp = document.createElement("p");
    textPopUp.innerText =
      "We are still working on the form feature. \n Would you like to send an email?";
    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "buttons-container");
    let noButton = document.createElement("button");
    noButton.setAttribute("id", "no-button");
    noButton.classList.add("popup-button");
    noButton.innerText = "NO";
    noButton.addEventListener("click", function (e) {
      let popUps = document.querySelectorAll("#pop-up");
      popUps.forEach((popUp) => {
        popUp.remove();
      });
    });
    let yesButton = document.createElement("button");
    yesButton.setAttribute("id", "yes-button");
    yesButton.classList.add("popup-button");
    yesButton.innerText = "YES";
    yesButton.addEventListener("click", sendEmail);
    // yesButton.addEventListener();

    // add elements to DOM
    app.append(popUpDom);
    popUpDom.append(textDivPopUp);
    textDivPopUp.append(textPopUp);
    popUpDom.append(buttonsDiv);
    buttonsDiv.append(noButton);
    buttonsDiv.append(yesButton);
  }
};

// const noButtonCliked = () => {
//   let popUps = document.querySelectorAll("#pop-up");
//   popUps.forEach((popUp) => {
//     popUp.remove();
//   });
// };

const sendEmail = () => {
  console.log(`sendEmail`);
  window.location = "mailto:hi@nama.works";
};
