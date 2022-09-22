function solve(input) {
    let map = new Map();

    for (let element of input) {
        let tokens = element.split(' ');

        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
            continue;
        }

        let currentQuantity = map.get(product);
        let updatedQuantity = currentQuantity + quantity;
        map.set(product, updatedQuantity);
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);