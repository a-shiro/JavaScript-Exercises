function solve(text) {
    let letters = text.split('');
    let result = [];
    let startSlice = text[0];
    let endSlice;

    let counter = 0;


    for (let [index, letter] of letters.entries()) {
        if (letter === letter.toUpperCase()) {
            counter++;

            if (counter === 2) {
                endSlice = index;

                result.push(text.slice(startSlice, endSlice));

                startSlice = index;
                counter = 1;
            }
        }
    }

    result.push(text.slice(startSlice, text.length));
    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');