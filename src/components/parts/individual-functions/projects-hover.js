import data from "../../data/data";
import { app } from "../../data/global_variables";

let mouseCoordinates = [0, 0];

const getCoordinates = (e) => {
  let x = e.clientX;
  let y = e.clientY;
  mouseCoordinates[0] = x + 20;
  mouseCoordinates[1] = y + 20;
};

const printProjectInfo = (project) => {
  let projectInfoLocation = data.projects[project];
  let projectInfoDivDom = document.createElement("div");
  projectInfoDivDom.classList.add("project-info-container");
  projectInfoDivDom.style.position = "absolute";
  let mouseXCoord = mouseCoordinates[0];
  let mouseYCoord = mouseCoordinates[1];
  projectInfoDivDom.style.left = mouseXCoord + `px`;
  projectInfoDivDom.style.top = mouseYCoord + `px`;
  app.append(projectInfoDivDom);

  let projectNameDom = document.createElement("p");
  projectNameDom.innerText = projectInfoLocation.projectName;
  projectNameDom.setAttribute("id", "project-name");

  let projectDateDom = document.createElement("p");
  projectDateDom.innerText = projectInfoLocation.year;

  let projectCategoryDom = document.createElement("p");
  projectCategoryDom.innerText = projectInfoLocation.category;

  projectInfoDivDom.append(projectNameDom);
  projectInfoDivDom.append(projectDateDom);
  projectInfoDivDom.append(projectCategoryDom);
};

export const addProjectsInfo = () => {
  // GET MOUSE POSITION
  document.addEventListener("mousemove", getCoordinates);

  // GET HOVERED ELEMENT AND PRINT PROJECT INFO
  document.addEventListener("mousemove", (event) => {
    let projectInfoContainer = document.querySelector(
      ".project-info-container"
    );
    let parentId = event.target.parentElement.getAttribute("id");
    if (event.target.classList.value === "project-image") {
      if (!document.contains(projectInfoContainer)) {
        printProjectInfo(parentId);
      } else if (document.contains(projectInfoContainer)) {
        let parentIdName = data.projects[parentId].projectName;
        // console.log(parentIdName);
        let projectInfoNameDom = document.querySelector("#project-name");
        let projectInfoName = projectInfoNameDom.innerText;
        // console.log(projectInfoName);
        let mouseXCoord = mouseCoordinates[0];
        let mouseYCoord = mouseCoordinates[1];
        projectInfoContainer.style.left = mouseXCoord + "px";
        projectInfoContainer.style.top = mouseYCoord + "px";

        if (!(parentIdName === projectInfoName)) {
          projectInfoContainer.remove();
          let mouseXCoord = mouseCoordinates[0];
          let mouseYCoord = mouseCoordinates[1];
          projectInfoContainer.style.left = mouseXCoord + "px";
          projectInfoContainer.style.top = mouseYCoord + "px";
        }
      }
    } else if (document.contains(projectInfoContainer)) {
      projectInfoContainer.remove();
    }
  });
};
