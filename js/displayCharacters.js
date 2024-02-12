import { charactersMarvelAPI } from "./endPoints.js";
import { getMarvelAPI } from "./getMarvelAPI.js";

export async function displayCharacters() {
    try {
        const root = document.querySelector(".root");

        if (localStorage.getItem("characters")) {
            const savedCharacters = JSON.parse(localStorage.getItem("characters"));
            renderCharacters(savedCharacters);
        } else {
            const charactersResponse = await getMarvelAPI(charactersMarvelAPI);
            const characters = charactersResponse.data.results;

            localStorage.setItem("characters", JSON.stringify(characters));

            renderCharacters(characters);
        }

        function renderCharacters(characters) {
            const data = `
                <button type="input">Search</button>
                <div class="characters-container">
                    ${characters.map(hero => (
                        `
                        <div class="characters">
                            <a href="#/characters/${hero.id}">
                                <h2>${hero.name}</h3>
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                            </a>
                        </div>
                        `
                    )).join('')}
                </div>
            `;
            root.innerHTML = data;
        }
    } catch (error) {
        console.error("Se ha producido un error al traer la informacion de la API:", error);
    }
}
