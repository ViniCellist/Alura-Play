import { searchVideoEx } from "./connectAPI.js";
import buildCard from "./showVideos.js";

async function searchVideos(event) {
    event.preventDefault();
    const dbSearch = document.querySelector("[data-search]").value;
    const search = await searchVideoEx(dbSearch);

    const list = document.querySelector("[data-lista]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)))
};

const searchBtn = document.querySelector("[data-btn-search]");

searchBtn.addEventListener('click', event => searchVideos(event));