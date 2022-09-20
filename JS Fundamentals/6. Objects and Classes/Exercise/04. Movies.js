function solve(input) {
    let movies = [];

    for (let command of input) {
        let name;
        let director;
        let date;
        let movie;

        switch (true) {
            case command.includes('addMovie'):
                name = command.slice(9, command.length);
                let object = {name};
                movies.push(object);
                break;
            case command.includes('directedBy'):
                [name, director] = command.split(' directedBy ');

                movie = movies.find(x => x.name === name);

                if (movie) {
                    movie.director = director;
                }

                break;
            case command.includes('onDate'):
                [name, date] = command.split(' onDate ');

                movie = movies.find(x => x.name === name);

                if (movie) {
                    movie.date = date;
                }
                break;
        }
    }

    for (let movie of movies) {
        if (movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);