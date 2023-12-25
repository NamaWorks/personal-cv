import { body, htmlDom } from "../../data/global_variables";

const printPageLoader = () => {
  let pageLoaderDiv = document.createElement("div");
  pageLoaderDiv.setAttribute("class", "page-loader-div");

  let pageLoader = document.createElement("img");
  pageLoader.setAttribute("id", "page-loader");
  pageLoader.setAttribute(
    "src",
    "https://res.cloudinary.com/dgrhbsilh/image/upload/v1703414236/Nama/01_Nama_LogoAnimation_tbqnuk.gif"
  );
  body.append(pageLoaderDiv);
  pageLoaderDiv.append(pageLoader);
};

export const launchPageLoader = () => {
  let timeOut = 4200;
  printPageLoader();
  const pageLoaderDivDom = document.querySelector(".page-loader-div");
  // if (window.load) {
  setTimeout(() => {
    pageLoaderDivDom.classList.add("hidden-page-loader");
  }, timeOut);
  setTimeout(() => {
    pageLoaderDivDom.remove();
  }, timeOut + 800);
  // }
};
