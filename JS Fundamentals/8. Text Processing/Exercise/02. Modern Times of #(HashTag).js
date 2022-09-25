function solve(text) {
    let result = [];

    let words = text.split(' ');

    for (let word of words) {
        if (word.includes('#') && word.length > 1) {
            let elements = word.split('');
            let numberFound = false;

            for (let element of elements) {
                if (isNaN(element)) {
                    continue;
                }

                numberFound = true;
            }

            if (!numberFound) {
                result.push(word);
            }
        }
    }

    result.forEach(word => console.log(word.slice(1, word.length)));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');