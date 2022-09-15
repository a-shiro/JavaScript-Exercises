function solve(array) {
    let firstN = Number(array.shift());
    let lastN = Number(array.pop());

    console.log(firstN + lastN);
}

solve(['20', '30', '40']);
solve(['5', '10']);
solve(['10']);