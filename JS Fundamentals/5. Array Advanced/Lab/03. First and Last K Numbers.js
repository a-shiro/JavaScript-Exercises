function solve(array) {
    let k = array.shift();

    let firstK = array.slice(0, k);
    let lastK = array.slice(array.length - k);

    console.log(...firstK);
    console.log(...lastK);
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);