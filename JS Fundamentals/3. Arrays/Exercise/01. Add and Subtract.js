function solve(array) {
    let firstSum = sumArray(array);

    function sumArray(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }

    let secondSum = sumArray(array);

    console.log(array);
    console.log(firstSum);
    console.log(secondSum);
}

solve([5, 15, 23, 56, 35]);