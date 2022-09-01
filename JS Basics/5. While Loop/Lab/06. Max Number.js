function maxNumber(input) {
    let i = 0
    let maxN = -Math.pow(10, 10000)
    let n = input[0]

    while (n !== 'Stop') {
        if (Number(n) > maxN) {
            maxN = n;
        }

        i += 1;
        n = input[i];
    }
    console.log(maxN);
}

maxNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop"
]);
maxNumber([
    "45",
    "-20",
    "7",
    "99",
    "Stop"
]);