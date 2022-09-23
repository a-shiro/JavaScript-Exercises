function solve(array) {
    let resources = {};

    for (let i = 0; i < array.length; i+=2) {
        let resource = array[i];
        let count = Number(array[i + 1]);

        if (!resources[resource]) {
            resources[resource] = 0;
        }

        resources[resource] += count;
    }

    Object.keys(resources).forEach(key => console.log(`${key} -> ${resources[key]}`));
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);