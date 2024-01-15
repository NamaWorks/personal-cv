import data from "../../data/data";
import { app } from "../../data/global_variables";
import { lisNav } from "../../data/global_variables";
import "./nav.css";

export const printNav = (arr) => {
  let nav = document.createElement("nav");
  nav.setAttribute("id", "nav");
  let ulNav = document.createElement("ul");
  ulNav.classList.add("ul-nav");

  let logo = document.createElement("img");
  logo.src = data.logo.darkGrey.url;
  logo.setAttribute("id", "top-left-logo");
  nav.append(logo);

  arr.forEach((element) => {
    let liNav = document.createElement("li");
    liNav.classList.add("li-nav");
    liNav.href = `#${element}`;
    // liNav.addEventListener("mouseover", hoverNavElement);
    // liNav.addEventListener("mouseout", hoverNavElement);
    let linkLiNav = document.createElement("a");
    linkLiNav.innerText = element;

    linkLiNav.href = `#${element}` + "Section";
    linkLiNav.className = "link-li-nav";
    let liNavMask = document.createElement("div");
    liNavMask.classList.add("nav-li-mask");
    liNavMask.href = `#${element}`;
    liNav.append(linkLiNav);
    liNav.append(liNavMask);
    ulNav.append(liNav);
  });

  nav.append(ulNav);
  app.append(nav);
};

const hoverNavElement = () => {
  let navLiMask = event.target.querySelector(".nav-li-mask");
  navLiMask.classList.toggle("nav-li-mask-hover");
};
