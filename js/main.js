import {  handleChangeRoute } from "./router.js";
import { getHome } from "./home.js";
import { loadCharacters } from "./router.js";
import { getCharacters } from "./nextPageOfCharacters.js";

window.addEventListener('hashchange', handleChangeRoute);
window.addEventListener('DOMContentLoaded', () => {
    getHome();
    loadCharacters.style.display = "none"
}) 

loadCharacters.addEventListener('click', getCharacters)