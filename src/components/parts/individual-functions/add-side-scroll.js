import { sectionsDivDom } from "../../data/global_variables";
export const addSideScroll = (element) => {
  let windowWidth = Math.round(window.innerWidth);
  const sideScroll = (event) => {
    event.preventDefault();
    element.scrollBy({
      left: event.deltaY < 0 ? -225 : 225,
    });
  };
  element.addEventListener("wheel", sideScroll);
};

export const getWindowWidth = () => {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);
  return windowWidth;
};

window.addEventListener("resize", console.log(window.innerWidth));
