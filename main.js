import { API_KEY, BASE_URL } from "./api.js";

const titulo = document.querySelector(".title-filme");
const descricao = document.querySelector(".desc-filme");
const poster = document.querySelector(".poster-filme");
let adjustBtn = document.getElementById("btn-search");
let posterCard = document.getElementById("poster-Card")



function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function updateFront(title, desc, post) {
    titulo.innerHTML = title;
    descricao.innerHTML = desc;
    poster.setAttribute('src', `https://image.tmdb.org/t/p/w500/${post}`)
}


document.getElementById("btn-search").addEventListener("click", function main() {
    
    let id = (Math.floor(Math.random() * (999999 - 0) + 0));
    let data = get(`${BASE_URL}${id}?api_key=${API_KEY}`)
    console.log(data)
    let filmes = JSON.parse(data);
    const title = filmes.original_title;
    const desc = filmes.overview;
    const posterPath = filmes.poster_path;

    adjustBtn.style.marginTop = "25%";
    posterCard.style.display = "flex";
    
    console.log(id)

    updateFront(title, desc, posterPath)

})
