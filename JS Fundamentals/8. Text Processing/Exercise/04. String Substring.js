function solve(searchedWord, text) {
    let words = text.split(' ');
    let found = false;

    for (let word of words) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            found = true;
            break;
        }
    }

    found ? console.log(searchedWord) : console.log(`${searchedWord} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');