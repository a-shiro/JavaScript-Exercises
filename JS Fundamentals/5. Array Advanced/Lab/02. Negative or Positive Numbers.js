function solve(array) {
    function swapElements(element) {
        return (Number(element) < 0) ? result.unshift(element) : result.push(element);
    }

    let result = [];
    array.forEach(swapElements);

    result.forEach( n => {
        console.log(n);
    })
}

solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);