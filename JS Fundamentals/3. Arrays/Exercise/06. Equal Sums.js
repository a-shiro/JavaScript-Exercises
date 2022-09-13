function solve(array) {
    function getLeftSum(array, n, idx) {
        let sum = 0;

        for (let i = 0; i < idx; i++) {
            sum += array[i];
        }
        return sum;
    }

    function getRightSum(array, n, idx) {
        let sum = 0;

        for (let i = idx + 1; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    for (let i = 0; i < array.length; i++) {
        let currentN = array[i];
        let currentIdx = i;

        let leftSum = getLeftSum(array, currentN, currentIdx);
        let rightSum = getRightSum(array, currentN, currentIdx);

        if (rightSum === leftSum) {
            return i;
        }
    }
    return 'no';
}

console.log(solve([1, 2, 3, 3]));
console.log(solve([1]));
console.log(solve([1, 2, 3]));
console.log(solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]));