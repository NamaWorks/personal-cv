import "./style.css";
import data from "./src/components/data/data";
import app from "./src/components/data/global_variables";

import { printNav } from "./src/components/parts/nav/nav";

let navElements = data.navTexts;
printNav(navElements);

// Podemos usar window.onload() para el page loader ?
