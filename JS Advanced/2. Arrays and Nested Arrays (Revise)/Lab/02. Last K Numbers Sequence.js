function solve(n, k) {
    let result = [];

    for (let i = 0; i < n; i++) {
        let nextN = 0;

        if (result.length < 2) {
            nextN = 1
        } else {
            for (let j = 1; j <= k; j++) {
                if (isNaN(result[i - j])) {
                    continue;
                }
                nextN += result[i - j];
            }
        }
        result.push(nextN);
    }

    return result;
}

console.log(solve(2, 1));
console.log(solve(6, 3));
console.log(solve(8, 2));
