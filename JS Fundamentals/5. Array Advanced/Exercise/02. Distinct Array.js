function solve(array) {
    let uniqueNumbers = [];

    array.forEach(n => {
        if (!uniqueNumbers.includes(n)) {
            uniqueNumbers.push(n);
        }
    })

    // array.filter(n => {
    //     if (!uniqueNumbers.includes(n)) {
    //         uniqueNumbers.push(n)
    //     }
    // })

    console.log(...uniqueNumbers);
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);