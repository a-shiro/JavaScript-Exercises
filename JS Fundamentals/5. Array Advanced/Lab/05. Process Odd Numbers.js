function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            let n = array[i] * 2;
            result.push(n);
        }
    }
    console.log(...result.reverse());
}

solve([10, 15, 20, 25]);