function solve(n, array) {
    array = array.slice(0, n);
    console.log(...array.reverse());
}

solve(3, [10, 20, 30, 40, 50]);