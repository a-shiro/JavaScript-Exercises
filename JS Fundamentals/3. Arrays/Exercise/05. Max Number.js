function solve(array) {
    let resultArray = [array[array.length - 1]];
    let currentPosition = array.length - 2;

    while (currentPosition >= 0) {
        let n = array[currentPosition];
        let isMaxN = true;

        for (let i = currentPosition + 1; i < array.length; i++) {
            if (n <= array[i]) {
                isMaxN = false;
                break;
            }
        }
        if (isMaxN) {
            resultArray.push(n);
        }
        currentPosition -= 1;
    }
    console.log(...resultArray.reverse());
}

solve([1, 4, 3, 2]);
solve([41, 41, 34, 20]);

solve([27, 19, 42, 2, 13, 45, 48]);
solve([14, 24, 3, 19, 15, 17]);