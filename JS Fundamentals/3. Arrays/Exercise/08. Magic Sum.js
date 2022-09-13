function solve(array, n) {
    let foundCombinations = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i === j) {
                continue;
            }

            let sum = array[i] + array[j];

            if (sum === n) {
                if (foundCombinations.includes(`[${i}, ${j}]` || `[${j}, ${i}]`)) {
                    continue;
                }

                foundCombinations += `[${i}, ${j}][${j}, ${i}]`;
                console.log(array[i], array[j]);
            }
        }
    }
}
solve([1, 2, 3, 4, 5, 6], 6)
solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);