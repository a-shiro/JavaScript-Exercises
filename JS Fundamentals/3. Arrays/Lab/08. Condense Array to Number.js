function solve(array) {
    if (array.length > 1) {
        while (array.length > 1) {
            let condensedArr = [];
            for (let i = 0; i < array.length - 1; i++) {
                let sum = array[i] + array[i + 1];
                condensedArr.push(sum);
            }
            array = condensedArr;
        }
    }
    console.log(array[0]);
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
