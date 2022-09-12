function solve(n1, operator, n2) {
    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '/':
            if (n1 === 0 || n2 === 0) {
                result = 0;
            } else {
                result = n1 / n2;
            }
            break;
        case '*':
            result = n1 * n2;
            break;
    }
    console.log(result.toFixed(2));
}

solve(5, '+', 10);
solve(0, '/', 2);
solve(25.5, '-', 3);