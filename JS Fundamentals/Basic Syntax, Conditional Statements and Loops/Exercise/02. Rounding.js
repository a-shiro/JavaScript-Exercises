function solve(n, roundTo) {
    if (roundTo > 15) {
        roundTo = 15;
    }
    console.log(parseFloat(n.toFixed(roundTo)));
}

solve(
    3.1415926535897932384626433832795,
    2
);
solve(
    10.5,
    3
);