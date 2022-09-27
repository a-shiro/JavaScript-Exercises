function solve(array) {
    let result = [];

    for (let hero of array) {
        let [name, level, items] = hero.split(' / ');

        result.push({
            name,
            'level': Number(level),
            'items': items ? items.split(', ') : []
        })
    }

    console.log(JSON.stringify(result));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

