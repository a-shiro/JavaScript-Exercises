function solve(replacementWords, text) {
    replacementWords = replacementWords.split(', ');

    for (let word of replacementWords) {
        let censor = '*'.repeat(word.length);

        text = text.replace(censor, word);
    }

    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');