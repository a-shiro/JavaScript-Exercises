function solve(...arrays) {
    let store = {};

    for (let array of arrays) {
        for (let i = 0; i < array.length; i += 2) {
            let product = array[i];
            let quantity = Number(array[i + 1]);

            if (Object.keys(store).includes(product)) {
                store[product] += quantity;
                continue;
            }
            store[product] = quantity;
        }
    }

    Object.keys(store).forEach(key => console.log(`${key} -> ${store[key]}`));
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);