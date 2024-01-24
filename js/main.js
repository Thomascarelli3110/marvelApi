const charactersMArvelAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f62bf23851431279216b492ff5fd2062&hash=fb9d6f13b82af99a133b6e97d4fafa5a&limit=50"

export async function getCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

async function displayCharacters() {
  try {
    const root = document.querySelector(".root")
    const characters = await getCharacters(charactersMArvelAPI)
    const heroes = characters.data.results;
    const data = `
    
      ${heroes.map(hero => (
      `
      <div class="characters-container">
          <a href="#" target="_blank">
           <h2>${hero.name}</h3>
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" atl="${hero.name}" class="img-thumbnail">
          </a>
      </div>
      `
    )).join('')}
    
    `
    root.innerHTML = data
  } catch (error) {
    console.error("Se a producido un error al traer la informacion de la API:", error);
  }
}

displayCharacters();



