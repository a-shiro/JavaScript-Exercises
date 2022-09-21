function solve(input) {
    let heroes = [];

    for (let hero of input) {
        let [heroName, heroLevel, items] = hero.split(' / ');

        heroes.push({heroName, heroLevel, items});
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let object of heroes) {
        console.log(`Hero: ${object.heroName}`);
        console.log(`level => ${object.heroLevel}`);
        console.log(`items => ${object.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);