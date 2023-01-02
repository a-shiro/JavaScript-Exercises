function solve(input) {
    const numbers = [];

    for (const element of input) {
        if (typeof element === 'number') {
            numbers.push(element)
            continue;
        }

        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
            return;
        }

        const y = numbers.pop();
        const x = numbers.pop();

        switch (element) {
            case '+':
                numbers.push(x + y);
                break;
            case '-':
                numbers.push(x - y);
                break;
            case '*':
                numbers.push(x * y);
                break;
            case '/':
                numbers.push(x / y);
                break;
        }
    }

    if (numbers.length >= 2) {
        console.log('Error: too many operands!');
        return;
    }

    console.log(numbers[0]);
}

solve([3, 4, '+']);
// solve([5, 3, 4, '*', '-']);
// solve([7, 33, 8, '-']);
// solve([[15, '/']]);
// solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
// solve([31, 2, '+', 11, '/']);