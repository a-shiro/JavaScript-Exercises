function solve(input) {
    let guestList = [];

    for (let person of input) {
        let name = person.split(' ')[0];
        let notGoing = person.split(' ').includes('not');

        if (notGoing) {
            switch (true) {
                case guestList.includes(name):
                    guestList.splice(guestList.indexOf(name));
                    break;
                default:
                    console.log(`${name} is not in the list!`);
            }
            continue;
        }

        switch (true) {
            case !guestList.includes(name):
                guestList.push(name);
                break;
            default:
                console.log(`${name} is already in the list!`);
        }
    }
    guestList.forEach(n => console.log(n));
}

solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
solve([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])