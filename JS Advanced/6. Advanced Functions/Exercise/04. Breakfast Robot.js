function createManager() {
    let storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            fat: 1,
            flavour: 1,
            protein: 5
        },
        turkey: {
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            protein: 10
        }
    };

    let instructions = {
        restock: (element, quantity) => {
            storage[element] += quantity;
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            let ingredientsNeeded = Object.keys(recipes[recipe])

            let result = checkStorage(recipe, ingredientsNeeded);

            if (result[0]) {
                for (let i = 0; i < quantity; i++) {
                    for (let ingredient of ingredientsNeeded) {
                        storage[ingredient] -= recipes[recipe][ingredient];
                    }
                }
                return 'Success';
            }

            return `Error: not enough ${result[1]} in stock`;
        },
        report: () => {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }

    function checkStorage(recipe, ingredientsNeeded) {
        for (let ingredient of ingredientsNeeded) {
            if (storage[ingredient] < recipes[recipe][ingredient]) {
                return [false, ingredient];
            }
        }
        return [true];
    }

    return function manager(input) {
        let [command, product, quantity] = input.split(' ');

        return instructions[command](product, Number(quantity));
    }
}

let manager = createManager();

console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
