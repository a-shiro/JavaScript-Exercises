function solve(numbers) {
    numbers.sort((x, y) => x - y);

    let arrayMiddle = Math.floor(numbers.length) / 2;

    return numbers.slice(arrayMiddle, numbers.length);
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));