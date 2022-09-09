function findByName(input) {
    let searchedBook = input[0];

    let nextBook
    let foundBook = false
    let i = 0

    do {
        i += 1;
        nextBook = input[i];

        if (nextBook === searchedBook) {
            foundBook = true;
            break;
        }
    } while (nextBook !== 'No More Books');

    let booksSearched = i - 1;

    if (foundBook) {
        console.log(`You checked ${booksSearched} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${booksSearched} books.`);
    }
}


findByName([
    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);
findByName([
    "The Spot",
    "Hunger Games",
    "Harry Potter",
    "Toronto",
    "Spotify",
    "No More Books"
]);
findByName([
    "Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Triple",
    "Stella",
    "The Matrix",
    "Bourne",
]);