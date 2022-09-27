function solve(array) {
    let towns = {};

    for (let townInfo of array) {
        let [name, population] = townInfo.split(' <-> ');

        if (!Object.keys(towns).includes(name)) {
            towns[name] = 0;
        }
        towns[name] += Number(population);
    }

    Object.keys(towns).forEach(key => console.log(`${key} : ${towns[key]}`));
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000'
]);