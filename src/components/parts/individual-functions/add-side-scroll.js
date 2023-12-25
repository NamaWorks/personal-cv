import { sectionsDivDom } from "../../data/global_variables";
export const addSideScroll = (element) => {
  element.addEventListener("wheel", (event) => {
    event.preventDefault();

    element.scrollBy({
      left: event.deltaY < 0 ? -20 : 20,
    });
  });
};
