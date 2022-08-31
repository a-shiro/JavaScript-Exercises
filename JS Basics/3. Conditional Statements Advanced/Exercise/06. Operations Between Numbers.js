function calc(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result;
    let numberType;

    switch (operator) {
        case '+':
            result = n1 + n2;
            numberType = result % 2 === 0 ? 'even' : 'odd';

            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;

        case '-':
            result = n1 - n2;
            numberType = result % 2 === 0 ? 'even' : 'odd';

            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;

        case '*':
            result = n1 * n2
            numberType = result % 2 === 0 ? 'even' : 'odd';

            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;

        case '/':
            if (n1 === 0 || n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }

            result = n1 / n2;

            console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            break;

        case '%':
            if (n1 === 0 || n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }

            result = n1 % n2;

            console.log(`${n1} ${operator} ${n2} = ${result}`);
            break;
    }
}

calc([
    "10",
    "12",
    "+"
]);
calc([
    "123",
    "12",
    "/"
]);
calc([
    "112",
    "0",
    "/"
]);
calc([
    "10",
    "1",
    "-"
]);
calc([
    "10",
    "3",
    "%"
]);
calc([
    "10",
    "0",
    "%"
]);
calc([
    "7",
    "3",
    "*"
]);