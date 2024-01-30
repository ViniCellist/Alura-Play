import { connectAPI } from "./connectAPI.js";

const list = document.querySelector('[data-lista]');

function buildCard() {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
        <iframe 
            width="100%" 
            height="72%" 
            src="https://www. youtube.com/embed/YhnNOTde2I0"
            title="Mercado de Trabalho | Desmistificando Mobile - Episódio 5" 
            frameborder="0"
            allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
                    allowfullscreen>
        </iframe>
        <div class="descricao-video">
            <img src="./img/logo.png" alt="logo canal alura">
            <h3>Mercado de Trabalho | Desmistificando Mobile...</h3>
            <p>1,1 mil visualizações</p>
        </div>
    `

    return video;
};

async function listVideo() {
    const list = await connectAPI.listVideos();
}