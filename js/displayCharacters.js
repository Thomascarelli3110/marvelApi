import { charactersMarvelAPI } from "./endPoints.js";
import { getMarvelAPI } from "./getMarvelAPI.js";

export async function displayCharacters() {
    try {
        const root = document.querySelector(".root")
        const characterId = window.location.hash.split("#/characters/")[1];
        const characters = await getMarvelAPI(charactersMarvelAPI)
        const heroes = characters.data.results;
        console.log(heroes);
        const data = 
        `
        <div class="characters-container">
        ${heroes.map(hero => (
            `
            <div class="characters">
                <a href="#/characters/${hero.id}">
                    <h2>${hero.name}</h3>
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" atl="${hero.name}" class="img-thumbnail">
                </a>
            </div>
            `
        )).join('')}
        </div>
        `
            root.innerHTML = data;
    } catch (error) {
        console.error("Se a producido un error al traer la informacion de la API:", error);
    }
}

