function solve(array1, array2) {
    let resultArray = [];

    for (let i = 0; i < array1.length; i++) {
        let result;
        if (i % 2 === 0) {
            result = Number(array1[i]) + Number(array2[i]);
            resultArray.push(result);
        } else {
            result = array1[i] + array2[i];
            resultArray.push(result);
        }
    }
    console.log(resultArray.join(' - '));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);