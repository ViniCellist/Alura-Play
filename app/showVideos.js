import { listVideosEx } from "./connectAPI.js";

const list = document.querySelector('.videos__container');

export default function buildCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
        <iframe 
            width="100%" 
            height="72%" 
            src="${url}"
            title="${titulo}" 
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
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;

    return video;
};

async function listVideo() {
    try {
        const listAPI = await listVideosEx();
        listAPI.forEach(element => list.appendChild(
            buildCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch {
        list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeios</h2>`
    }
};

listVideo();