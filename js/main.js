const marvel = {
  render: () => {
    const marvelAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f62bf23851431279216b492ff5fd2062&hash=fb9d6f13b82af99a133b6e97d4fafa5a&limit=50"
    const container = document.querySelector('.root')
    let contentHTML = '';

    fetch(marvelAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          const urlHero = hero.urls[0].url
          contentHTML += `
            <div class="characters-container">
              <h2>${hero.name}</h2>
              <a href="${urlHero}" target="_blank">
              <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
            </div>
          `
        }
        container.innerHTML = contentHTML
      })
  }
};
marvel.render()


