function solve(input) {
    let manufacturedData = new Map();

    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');

        if (!manufacturedData.has(brand)) {
            manufacturedData.set(brand, new Map());
        }

        let carModels = manufacturedData.get(brand);

        if (!carModels.has(model)) {
            carModels.set(model, 0);
        }

        carModels.set(model, carModels.get(model) + Number(quantity));
    }

    for (let line of manufacturedData) {
        let brand = line[0];
        let models = line[1];

        console.log(brand);

        for (let [model, quantity] of models.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])