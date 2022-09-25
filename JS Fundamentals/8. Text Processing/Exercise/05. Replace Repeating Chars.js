function solve(text) {
    let sequence = [];

    for (let letter of text.split('')) {
        let lastSequenceLetter = sequence[sequence.length - 1];

        if (letter !== lastSequenceLetter)
            sequence.push(letter);
    }

    console.log(sequence.join(''));
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');