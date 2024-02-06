export function getHome() {
    const root = document.querySelector('.root');
    const data =
    `
        <div class="first-container">
            <h1>Marvel Universe API Hub</h1>
                <img src="https://earthsmightiestblog.com/wp-content/uploads/2022/05/marvel-logo.png"
                alt="Imagen de la home" width="650px">
                <p>Our page, powered by the mighty Marvel API, extends its gratitude for your visit by offering you a unique experience. 
                Through this programming interface, we access a rich database that allows you to uncover unprecedented details about your favorite heroes and villains. 
                From detailed biographies to comic galleries, each section is infused with gratitude for your interest. 
                The Marvel API becomes our ally, amplifying your experience and allowing you to immerse yourself in the richness of the Marvel mythology in an interactive and thrilling way. 
                We are thankful for every click that awakens new stories and challenges, thanks to the fusion of our creative design and the power provided by the Marvel API. 
                Thank you for being part of this unique and exciting experience</p>
        </div>
    `
    root.innerHTML = data;
}
