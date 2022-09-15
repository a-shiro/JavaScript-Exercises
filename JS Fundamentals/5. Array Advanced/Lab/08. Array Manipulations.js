function solve(arr) {
    let numbersArray = arr.shift().split(' ').map(Number);
    let commands = arr.slice();

    for (let command of commands) {
        let [action, firstNum, secondNum] = command.split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (action) {
            case 'Add':
                numbersArray.push(firstNum);
                break;
            case 'Remove':
                numbersArray = numbersArray.filter(n => firstNum !== n);
                break;
            case 'RemoveAt':
                numbersArray.splice(firstNum, 1);
                break;
            case 'Insert':
                numbersArray.splice(secondNum, 0, firstNum);
                break;
        }
    }
    console.log(...numbersArray);
}

solve([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
solve([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);