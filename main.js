import "./style.css";
import "./src/components/parts/individual-functions/function-styles-changes.css";
import data from "./src/components/data/data";
import { sectionsDivDom, app } from "./src/components/data/global_variables";

import { printNav } from "./src/components/parts/nav/nav";
printNav(data.navTexts);

import { addSideScroll } from "./src/components/parts/individual-functions/add-side-scroll";
sectionsDivDom.setAttribute("id", "div-for-x-scroll");
app.append(sectionsDivDom);

addSideScroll(sectionsDivDom);

import { launchPageLoader } from "./src/components/parts/individual-functions/page-loader";
launchPageLoader();
// Podemos usar window.onload() para el page loader ?

import { printWhoSct } from "./src/components/parts/sections/whoSct.js";
import { printWhatSct } from "./src/components/parts/sections/whatSct.js";
import { printKnowSct } from "./src/components/parts/sections/knowSct.js";
import { printMoreSct } from "./src/components/parts/sections/moreSct.js";

printWhoSct("whoSection");
printWhatSct("whatSection");
printKnowSct("knowSection");
printMoreSct("moreSection");

import { printDailyMsg } from "./src/components/parts/daily-msg/daily-msg";
printDailyMsg();

import { addProjectsInfo } from "./src/components/parts/individual-functions/projects-hover.js";

addProjectsInfo();
