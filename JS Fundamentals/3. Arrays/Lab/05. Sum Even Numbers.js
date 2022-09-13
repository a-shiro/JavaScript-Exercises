function solve(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += Number(array[i]);
        }
    }
    console.log(sum);
}

solve(['1','2','3','4','5','6']);