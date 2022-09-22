function solve(input) {
    let wordsArray = [];

    for (let word of input) {
        let object = wordsArray.find(object => object.word === word);

        if (object) {
            object.timesSeen++;
            continue;
        }

        let timesSeen = 1;
        wordsArray.push({word, timesSeen});
    }

    wordsArray.sort((x, y) => y.timesSeen - x.timesSeen);
    wordsArray.forEach(object => console.log(`${object.word} -> ${object.timesSeen} times`));
}

solve([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"
]);