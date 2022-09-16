function solve(array) {
    let trainCarts = array.shift().split(' ').map(Number);
    let cartCapacity = Number(array.shift());

    for (let command of array) {
        if (isNaN(command)) {
            let people = Number(command.split(' ')[1]);
            trainCarts.push(people);
            continue;
        }

        let people = Number(command);

        for (let [cartIdx, cart] of trainCarts.entries()) {
            let currentCartCapacity = cartCapacity - cart;

            if (currentCartCapacity >= people) { // <-- Fills only one cart if available
                trainCarts[cartIdx] += people;
                break;
            }
            // trainCarts[cartIdx] += currentCartCapacity; <-- Starts filling carts
            // people -= currentCartCapacity;
        }
    }
    console.log(...trainCarts);
}

solve([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])
solve([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);