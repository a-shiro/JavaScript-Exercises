function solve(array) {
    let catalogue = {};

    for (let pair of array) {
        let [product, price] = pair.split(' : ')

        let underLetter = product[0];

        if (!Object.keys(catalogue).includes(underLetter)) {
            catalogue[underLetter] = [];
        }

        let duplicate = catalogue[underLetter].find(object => object.product === product);

        if (!duplicate) {
            catalogue[underLetter].push({
                product,
                'price': Number(price)
            });
        }
    }

    for (let letter of Object.keys(catalogue).sort((a, b) => a.localeCompare(b))) {
        console.log(letter);

        for (let item of catalogue[letter].sort((a, b) => a.product.localeCompare(b.product))) {
            console.log(` ${item.product}: ${item.price}`);
        }
    }
}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
