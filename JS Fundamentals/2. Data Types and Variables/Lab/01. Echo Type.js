function solve(input) {
    let type = typeof input;

    console.log(typeof input);

    if (type === "string" || type === 'number') {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

solve('Hello, JavaScript!');
solve(18);
solve(null);