const form = document.getElementById("rateMovies");

let savedMovies = localStorage.getItem("ratedMovies");
let listOfMovies = (savedMovies) ? JSON.parse(savedMovies) : [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(confirm("Save your response?")) {
        const movieTitle = document.getElementById("title").value.trim();
        const yearOfRelease = document.getElementById("year").value.trim();
        const genre = document.getElementById("genre").value.trim();

        let ratingSelection = document.getElementsByName("rating");
        let rating;
        let tracker = false;

        for (let i=0; i < ratingSelection.length; i++) {
            if(ratingSelection[i].checked) {
                rating = ratingSelection[i].value;
            }
        }

        let movieRated = {
            title: movieTitle,
            yearReleased: yearOfRelease,
            genre: [genre],
            rating: [rating]
        };

        console.log(movieRated);

        //update existing object for a movie title if it has already been recorded before
        for (let i in listOfMovies) {
            if(listOfMovies[i].title == movieRated.title && listOfMovies[i].yearReleased == movieRated.yearReleased) {
                tracker = true;
                let genreTrack = false;

                for(let k in listOfMovies[i].genre) {
                    if(listOfMovies[i].genre[k] == genre)
                        genreTrack = true;
                }
                    
                if(!genreTrack)
                    listOfMovies[i].genre.push(genre); //add new genre
                    
                listOfMovies[i].rating.push(rating);

            }
        } 
               
        //add movie if it has not been saved before
        if(!tracker)
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
    submittedMovies.innerHTML = "";

    console.log(submittedMovies);
    
    for(let i in movies) {
        //creating the html elements to display the information needed for each movie
        let movieDisplay = document.createElement("div");
        let display = document.createElement("p");
        let ratingDisplay = document.createElement("div");
        let ratingString = document.createElement("p");
        let deleteButton = document.createElement("button");
        let star = "&#9733;";

        let aveRating = 0;
        let genreString = movies[i].genre.join(", ");

        movieDisplay.classList.add("movieDisplay");
        movieDisplay.dataset.title = movies[i].title;

        //calculating and displaying average rating
        for(let k=0; k < movies[i].rating.length; k++) {
            aveRating += parseInt(movies[i].rating[k]);
        }

        aveRating /= (movies[i].rating.length);

        console.log(`Average Rating: ${aveRating}`);

        aveRating = Math.ceil(aveRating);

        for(let j=0; j < aveRating; j++) {
            ratingString.innerHTML += star;
        }

        ratingDisplay.appendChild(ratingString);

        ratingString.classList.add("ratingStars");

        deleteButton.textContent = "Remove";

        deleteButton.addEventListener("click", function() {
            deleteMovie(this, listOfMovies);
        }) 

        deleteButton.classList.add("deleteButton");
        deleteButton.dataset.title = movies[i].title; //saves title to be used in other functions

        display.innerHTML = `${movies[i].title} (${movies[i].yearReleased}) - ${genreString}, Rating: `;

        movieDisplay.appendChild(display);
        movieDisplay.appendChild(ratingDisplay);
        movieDisplay.appendChild(deleteButton);

        submittedMovies.appendChild(movieDisplay);
    }
}

function deleteMovie(element, listOfMovies) {

    if(confirm("Delete movie?")) {
        let movieTitle = element.dataset.title;

        function filterMovies(movies) {
            return movies.title != movieTitle;
        }

        element.parentElement.remove(); //remove from display

        listOfMovies = listOfMovies.filter(filterMovies); //remove deleted movie from local storage array
        console.log(listOfMovies);

        localStorage.setItem("ratedMovies", JSON.stringify(listOfMovies));
        console.log(`Deleted ${movieTitle} from local storage`);
    }
}