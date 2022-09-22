function solve(array) {
    let searchedWords = array.shift().split(' ');

    let occurrences = [];

    for (let word of searchedWords) {
        occurrences.push({'word': word, 'seen': 0},
        )
    }

    for (let word of array) {
        if (searchedWords.includes(word)) {
            occurrences.find(object => object.word === word)['seen']++;
        }
    }

    occurrences.sort((a, b) => b.seen - a.seen);
    occurrences.forEach(object => console.log(`${object.word} - ${object.seen}`));
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);