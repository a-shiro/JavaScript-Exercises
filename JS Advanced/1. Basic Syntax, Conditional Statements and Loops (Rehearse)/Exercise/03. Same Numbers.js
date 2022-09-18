function solve(n) {
    let array = String(n).split('');

    let boolResult = array.every(n => n === array[0]);
    let arraySum = array.reduce((total, n) => Number(n) + total, 0);

    console.log(boolResult);
    console.log(arraySum);
}

solve(2222222);
solve(1234);