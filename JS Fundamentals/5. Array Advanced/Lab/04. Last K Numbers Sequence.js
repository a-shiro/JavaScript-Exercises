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
    console.log(...result);
}

solve(2, 1);
solve(6, 3);
solve(8, 2);
