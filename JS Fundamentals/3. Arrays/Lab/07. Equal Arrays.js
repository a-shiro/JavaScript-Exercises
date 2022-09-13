function solve(array1, array2) {
    let sum = 0;
    let identical = true;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            sum += Number(array1[i]);
        } else {
            identical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (identical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(
    ['10', '20', '30'],
    ['10', '20', '30']
);
solve(
    ['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5']
);