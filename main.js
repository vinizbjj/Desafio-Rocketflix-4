const titulo = document.querySelector(".title-filme");
const descricao = document.querySelector(".desc-filme");
const poster = document.querySelector(".poster-filme");
let adjustbtn = document.getElementById("btn-search")



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
    adjustbtn.style.marginTop = "25%";
    let id = (Math.floor(Math.random() * (957 - 0) + 0));
    let data = get(`https://api.themoviedb.org/3/movie/${id}?api_key=15c67dc9072a44e6666013d769223ca6`)
    let filmes = JSON.parse(data);
    const title = filmes.original_title;
    const desc = filmes.overview;
    const posterPath = filmes.poster_path;
    console.log(id)

    updateFront(title, desc, posterPath)

})
