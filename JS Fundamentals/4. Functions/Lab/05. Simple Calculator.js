function calculator(n1, n2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = (n1, n2) => n1 + n2;
            break;
        case 'subtract':
            result = (n1, n2) => n1 - n2;
            break;
        case 'multiply':
            result = (n1, n2) => n1 * n2;
            break;
        case 'divide':
            if (n1 === 0 || n2 === 0) {
                result = 0;
                break;
            }
            result = (n1, n2) => n1 / n2;
            break;
    }

    console.log(result(n1, n2));
}

calculator(2, 2, 'multiply');
calculator(2, 2, 'subtract');