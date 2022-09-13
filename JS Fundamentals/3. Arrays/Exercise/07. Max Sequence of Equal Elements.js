function solve(array) {
    let resultArray = [];
    let sequenceArray = [array[0]];

    for (let i = 1; i < array.length; i++) {
        let element = array[i];

        if (element === sequenceArray[0]) {
            sequenceArray.push(element);
            continue;
        }

        if (sequenceArray.length > resultArray.length) {
            resultArray = sequenceArray;
        }
        sequenceArray = [element];
    }

    if (sequenceArray.length > resultArray.length) {
        resultArray = sequenceArray;
    }

    console.log(resultArray.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
solve([1, 1, 1, 2, 3, 1, 3, 3])
solve([4, 4, 4, 4])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])