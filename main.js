import "./style.css";
import data from "./src/components/data/data";
import { sectionsDivDom, app } from "./src/components/data/global_variables";
import "./src/components/parts/change-cursor/change-mouse-cursor.js";

import { addSideScroll } from "./src/components/parts/individual-functions/add-side-scroll";
sectionsDivDom.setAttribute("id", "div-for-x-scroll");
app.append(sectionsDivDom);
addSideScroll(sectionsDivDom);

import { launchPageLoader } from "./src/components/parts/individual-functions/page-loader";
launchPageLoader();

import { printNav } from "./src/components/parts/nav/nav";
printNav(data.navTexts);

import { printWhoSct } from "./src/components/parts/sections/whoSct.js";
printWhoSct("whoSection");

import { printDailyMsg } from "./src/components/parts/daily-msg/daily-msg";
printDailyMsg();

// Podemos usar window.onload() para el page loader ?
