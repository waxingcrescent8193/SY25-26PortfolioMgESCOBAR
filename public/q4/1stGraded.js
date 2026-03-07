const form = document.getElementById("rateMovies");

let savedMovies = localStorage.getItem("ratedMovies");

let listOfMovies = (savedMovies) ? JSON.parse(savedMovies) : [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(confirm("Save your response?")) {
        const movieTitle = document.getElementById("title").value;
        const yearOfRelease = document.getElementById("year").value;
        const genre = document.getElementById("genre").value;

        let ratingSelection = document.getElementsByName("rating");
        let rating;

        for (let i in ratingSelection) {
            if(ratingSelection[i].checked) {
                rating = ratingSelection[i].value;
            }
        }

        let movieRated = {
            title: movieTitle,
            yearReleased: yearOfRelease,
            genre: genre,
            rating: rating
        };

        console.log(movieRated);

        //push to local storage array
        listOfMovies.push(movieRated);

        //set local storage array to local storage
        localStorage.setItem("ratedMovies", JSON.stringify(listOfMovies));

        //console log confirmation
        console.log("Rating submitted");
    }
})

function focused(element) {
    element.classList.add("focus");
}

function unfocused (element) {
    element.classList.remove("focus");
}