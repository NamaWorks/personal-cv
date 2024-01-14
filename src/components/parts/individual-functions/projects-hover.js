import data from "../../data/data";

export const getMousePosition = () => {
  document.addEventListener("mousemove", getMouseCoordinates);
};

export const printProjectInfo = (project) => {
  let projectInfoDiv = data.projects[project];
  console.log(projectInfoDiv);
};

const getMouseCoordinates = (e) => {
  let x = e.clientX;
  let y = e.clientY;
  console.log("x" + x);
  console.log("y" + y);
};
