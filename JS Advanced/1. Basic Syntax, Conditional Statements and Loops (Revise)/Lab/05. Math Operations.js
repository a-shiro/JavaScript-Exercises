function calculator(n1, n2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = (n1, n2) => n1 + n2;
            break;
        case '-':
            result = (n1, n2) => n1 - n2;
            break;
        case '*':
            result = (n1, n2) => n1 * n2;
            break;
        case '/':
            if (n1 === 0 || n2 === 0) {
                result = 0;
                break;
            }
            result = (n1, n2) => n1 / n2;
            break;
        case '%':
            result = (n1, n2) => n1 % n2;
            break;
        case '**':
            result = (n1, n2) => n1 ** n2;
            break;
    }
    console.log(result(n1, n2));
}

calculator(2, 2, '+');
calculator(2, 2, '**');
calculator(2, 2, '/');