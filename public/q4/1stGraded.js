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

        for (let i in ratingSelection) {
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


        //START OF IN PROGRESS
        //counterchecking if movieRated is alr in local storage and then just update

        for (let i in listOfMovies) {
            if(listOfMovies[i].title == movieRated.title && listOfMovies[i].yearReleased == movieRated.yearReleased) {
                tracker = true;
                let genreTrack = false;

                for(let k in listOfMovies[i].genre) {
                    if(listOfMovies[i].genre[k] == movieRated.genre)
                        genreTrack = true;
                }
                
                if(!genreTrack)
                    listOfMovies[i].genre.push(genre);
                
                listOfMovies[i].rating.push(rating);

            }
        }
        

        if(!tracker)
            listOfMovies.push(movieRated);
    
        //END OF IN PROGRESS

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
    submittedMovies.innerHTHML = "";
    
    for(let i in movies) {
        let movieDisplay = document.createElement("div");
        let display = document.createElement("p");
        let ratingDisplay = document.createElement("div");
        let ratingString = document.createElement("p");
        let star = "&#9733;";

        let aveRating = 0;
        let genreString = "";

        movieDisplay.classList.add("movieDisplay");

        for(let k=0; k < movies[i].rating.length; k++) {
            aveRating += parseInt(movies[i].rating[k]);
        }

        aveRating /= (movies[i].rating.length);

        console.log(aveRating);

        aveRating = Math.ceil(aveRating);

        for(let j=0; j < aveRating; j++) {
            ratingString.innerHTML += star;
        }

        //genre string
        for(let m in movies[i].genre) {
            genreString += movies[i].genre[m] + ", "
        }

        ratingDisplay.appendChild(ratingString);

        ratingString.classList.add("ratingStars");

        display.innerHTML = `${movies[i].title} (${movies[i].yearReleased}) - ${genreString} Rating: `;

        movieDisplay.appendChild(display);
        movieDisplay.appendChild(ratingDisplay);

        document.getElementById("submittedMovies").appendChild(movieDisplay);
    }
}