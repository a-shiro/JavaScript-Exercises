function solve(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
        return;
    }

    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
}

solve(5);
solve('name');
solve(true);