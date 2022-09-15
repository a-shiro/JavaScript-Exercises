function solve(numbers) {
    function sortFromMinToMax (x, y) {
        return x - y;
    }

    numbers = numbers.sort(sortFromMinToMax);
    console.log(...numbers.slice(0, 2));
}

solve([30, 15, 50, 5]);
