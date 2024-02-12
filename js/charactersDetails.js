import { getMarvelAPI } from "./getMarvelAPI.js";
import { displayCharacters } from "./displayCharacters.js";
import { charactersMarvelAPI } from "./endPoints.js";


export async function getCharacterId() {
    try {
        const root = document.querySelector(".root");
    const characterId = window.location.hash.split("#/characters/")[1];
    const getOnlyCharactersId = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=f62bf23851431279216b492ff5fd2062&hash=fb9d6f13b82af99a133b6e97d4fafa5a&limit=50`
    const getCharacter = await getMarvelAPI(getOnlyCharactersId)
    const character = getCharacter.data.results[0];
    
    let data =
    `


    <div class="container">
    
        <div class="container-character">
            <h1>${character.name}</h1>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="400px">
    `

    if(character.description) {
        data += `
            <p>${character.description}</p>
        `
    } else {
        data += `
        <p>(" There is no description of this character ")</p>
        `
    }

    data += `
            </div>
        </div>
    `

    root.innerHTML = data
    } catch (error) {
        console.error("Se ha producido un error al traer el personaje designado:", error);
    }
}







