function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function newPost(filmes) {
    console.log(filmes)
    postimg = document.createElement("div");
    keyPost = document.createElement("img");
    keyPost.innerHTML = filmes.poster_path

    postimg.appendChild(keyPost);

    return postimg;
}

function main() {
    const data = fazGet("https://api.themoviedb.org/3/movie/550?api_key=15c67dc9072a44e6666013d769223ca6")
    console.log(data)
    let filmes = JSON.parse(data);
    const poster = document.getElementById("poster")
    filmes = element => {
        const postimg = newPost(element);
        poster.appendChild(postimg)
    }



}

main()

