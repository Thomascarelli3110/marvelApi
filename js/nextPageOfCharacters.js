import { getMarvelAPI } from "./getMarvelAPI.js"


export async function getCharacters() {
    const offset = 100
    const limit = 50
    const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f62bf23851431279216b492ff5fd2062&hash=fb9d6f13b82af99a133b6e97d4fafa5a&offset=${offset}&limit=${limit}`
    try {
        const response = await getMarvelAPI(apiUrl);
        console.log(response.data.results);
        
    } catch (error) {
        console.error("Se ha producido un error al traer la API: ",error);
    }
}
