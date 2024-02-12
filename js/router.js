import { charactersMarvelAPI } from "./endPoints.js";
import { displayCharacters } from "./displayCharacters.js";
import { getMarvelAPI } from "./getMarvelAPI.js"
import { getHome } from "./home.js";
import { getCharacterId } from "./charactersDetails.js";

export const loadCharacters = document.querySelector(".loadCharacters")



export async function displayRoutes(route) {
    const characterId = window.location.hash.split("#/characters/")[1]
    const root = document.querySelector(".root");
    root.innerHTML = "";
    switch (route) {
        case "#/characters":
            await getMarvelAPI(charactersMarvelAPI);
            displayCharacters();
            loadCharacters.style.display = "block";
            break;
        case `#/characters/${characterId}`:
            getCharacterId();
            loadCharacters.style.display = "none"
            break;
        case "#/creators":
            console.log("Creadores");
            loadCharacters.style.display = "none"
            break;
        case "#/home":
            getHome();
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



