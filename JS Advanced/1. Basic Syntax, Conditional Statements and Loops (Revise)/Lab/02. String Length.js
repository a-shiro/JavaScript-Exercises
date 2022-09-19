function solve(...array) {
    let result = array.reduce((total, str) => total + str.length, 0);
    let resultAverage = Math.round(result / array.length);

    console.log(result);
    console.log(resultAverage);
}


solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');