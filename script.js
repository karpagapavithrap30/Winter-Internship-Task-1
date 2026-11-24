
function searchMovies() {

    // Get search input
    let input = document.getElementById("searchInput").value.toLowerCase();

    // Get all movie cards
    let movies = document.querySelectorAll(".movie-card");

    let found = false;

    movies.forEach(function(movie) {

        let movieName = movie.querySelector("h3").innerText.toLowerCase();

        if (movieName.includes(input)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }

    });

    if (!found) {
        alert("Movie not found!");
    }
}
