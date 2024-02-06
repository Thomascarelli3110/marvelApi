import { charactersMarvelAPI } from "./endPoints.js";
import { displayCharacters } from "./displayCharacters.js";
import { getMarvelAPI } from "./getMarvelAPI.js"
import { getHome } from "./home.js";
import { getCharacterId } from "./charactersDetails.js";


export async function displayRoutes(route) {
    const characterId = window.location.hash.split("#/characters/")[1]
    const root = document.querySelector(".root");
    root.innerHTML = "";
    switch (route) {
        case "#/characters":
            await getMarvelAPI(charactersMarvelAPI);
            displayCharacters();
            break;
        case `#/characters/${characterId}`:
            getCharacterId();
            break;
        case "#/creators":
            console.log("Creadores");
            break;
        case "#/home":
            getHome();
            break;
        case "#/comics":
            console.log("Comics");
            break;
        case "#/series":
            console.log("Series");
            break;
        default:
            console.error("No se encontró la página");
            break;
    }
};

export function handleChangeRoute() {
    const route = window.location.hash;
    displayRoutes(route)
}



