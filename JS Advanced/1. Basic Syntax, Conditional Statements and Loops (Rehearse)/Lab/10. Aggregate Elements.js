function solve(array){
    let sum = array.reduce((total, n) => total + n, 0);
    let inverseSum = array.reduce((total, n) => total + (1 / n), 0)
    let concatenatedSum = array.reduce((sum, element) => sum + String(element), '')

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedSum);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);