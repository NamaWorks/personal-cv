import data from "../../data/data";
import app from "../../data/global_variables";
import "./nav.css";

export const printNav = (arr) => {
  let nav = document.createElement("nav");
  let ulNav = document.createElement("ul");
  ulNav.classList.add("ul-nav");

  arr.forEach((element) => {
    let liNav = document.createElement("li");
    liNav.classList.add("liNav");
    let linkLiNav = document.createElement("a");
    linkLiNav.innerText = element;
    linkLiNav.href = `#${element}`;
    liNav.append(linkLiNav);
    ulNav.append(liNav);
  });

  nav.append(ulNav);
  app.append(nav);
};
