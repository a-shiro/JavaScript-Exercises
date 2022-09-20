function solve(input) {
    let fixTo = n => Number(n).toFixed(2);
    let cities = [];

    for (let city of input) {
        let [town, latitude, longitude] = city.split(' | ');

        latitude = fixTo(latitude);
        longitude = fixTo(longitude);

        cities.push({town, latitude, longitude});
    }

    cities.forEach(object => console.log(object));
}

solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);