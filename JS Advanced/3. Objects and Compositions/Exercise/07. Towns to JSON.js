function solve(array) {
    array.shift();

    let result = [];

    for (let data of array) {
        let [town, latitude, longitude] = data.slice(2, data.length - 2).split(' | ');

        latitude =  Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)

        result.push({
            'Town': town,
            'Latitude': Number(latitude),
            'Longitude': Number(longitude)
        });
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);