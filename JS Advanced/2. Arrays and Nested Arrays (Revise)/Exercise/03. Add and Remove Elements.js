function solve(commands) {
    let result = [];
    let counter = 0;

    for (let command of commands) {
        counter++;

        switch (command) {
            case 'add':
                result.push(counter);
                break;
            case 'remove':
                result.pop();
                break;
        }
    }

    result.length > 0 ? result.forEach(x => console.log(x)) : console.log('Empty');
}

solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);