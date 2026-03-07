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

        displayMovies(listOfMovies);
    }
})

function focused(element) {
    element.classList.add("focus");
}

function unfocused (element) {
    element.classList.remove("focus");
}

function displayMovies(movies) {
    for(let i in movies) {
        let movieDisplay = document.createElement("div");
        let display = document.createElement("p");
        let ratingDisplay = document.createElement("div");
        let ratingString = document.createElement("p");
        let star = "&#9733;";

        movieDisplay.classList.add("movieDisplay");

        for(let j=0; j < movies[i].rating; j++) {
            ratingString.innerHTML += star;
        }

        ratingDisplay.appendChild(ratingString);

        ratingString.classList.add("ratingStars");

        display.innerHTML = `${movies[i].title} (${movies[i].yearReleased}) - ${movies[i].genre}, Rating: `;

        movieDisplay.appendChild(display);
        movieDisplay.appendChild(ratingDisplay);

        document.getElementById("submittedMovies").appendChild(movieDisplay);
    }
}