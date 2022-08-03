function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function main() {
    let data = fazGet("https://api.themoviedb.org/3/movie/550?api_key=15c67dc9072a44e6666013d769223ca6")
    let filmes = JSON.parse(data);
    console.log(filmes);
    filmes = filmes.id; // Retorna o id.

    console.log(`The id is ${filmes} chupa beckers`)



}

main()