import "./style.css";
import data from "./src/components/data/data";

import { printNav } from "./src/components/parts/nav/nav";
printNav(data.navTexts);

import { printSectionsFromData } from "./src/components/parts/sections/sections";
printSectionsFromData(data.sections);

// Podemos usar window.onload() para el page loader ?
