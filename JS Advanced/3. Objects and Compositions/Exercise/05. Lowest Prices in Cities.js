function solve(array) {
    let products = {};

    for (let city of array) {
        let [name, product, price] = city.split(' | ')
        price = Number(price);

        if (!Object.keys(products).includes(product)) {
            products[product] = {name , price};
            continue;
        }

        if (price < products[product].price) {
            products[product].name = name;
            products[product].price = price;
        }
    }

    Object.keys(products).forEach(key => console.log(`${key} -> ${products[key].price} (${products[key].name})`));
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);