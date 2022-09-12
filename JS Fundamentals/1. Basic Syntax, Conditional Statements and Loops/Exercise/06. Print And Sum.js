function solve(start, end) {
    let sum = 0;
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);
        sum += i;
    }
    console.log(...array);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);