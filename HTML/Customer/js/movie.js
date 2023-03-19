const urlMovies ="http://localhost:8080/MovieList"

let movies =[
    {id:0, title: "", director: "", year:0}
    ];

let nextId = 1;

// function to add a new movie to the database
async function addMovie(title, director, year) {
    const client = new fetch(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('movies');
    const result = await collection.insertOne({ title, director, year });
    console.log(`Movie ${title} added with id ${result.insertedId}`);
    client.close();
}

// function to delete a movie from the array
function deleteMovie(id) {
    let index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
    }
}

// function to edit a movie in the array
function editMovie(id, title, director, year) {
    let index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
        movies[index].title = title;
        movies[index].director = director;
        movies[index].year = year;
    }
}

// function to print all movies in the array
function printMovies() {
    movies.forEach(movie => console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`));
}


// example
printMovies()

deleteMovie(0)
printMovies()

addMovie("Inception", "Christopher Nolan", 2010);
printMovies()

editMovie(1, "In", "Christopher Nolan", 2000)
printMovies()
