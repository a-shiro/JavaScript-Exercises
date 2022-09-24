function solve(text, word) {
    let censor = '*'.repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censor);
    }

    console.log(text);
}

solve('A small sentence with some words', 'small');
solve('hidden hidden hidden hidden', 'hidden');