function solve(array) {
    let firstN = Number(array.shift());
    let lastN = Number(array.pop());

    return firstN + lastN;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
console.log(solve(['10']));