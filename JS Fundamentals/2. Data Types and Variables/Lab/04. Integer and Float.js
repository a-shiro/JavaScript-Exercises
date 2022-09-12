function solve(n1, n2, n3) {
    let result = n1 + n2 + n3;
    let type = result % 1 === 0 ? 'Integer' : 'Float';

    console.log(`${result} - ${type}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);