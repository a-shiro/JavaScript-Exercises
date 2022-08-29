function checkGreaterNumber(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    if (n1 > n2) {
        console.log(n1)
    } else {
        console.log(n2)
    }
}

checkGreaterNumber([
    '5',
    '3'
]);
checkGreaterNumber([
    '3',
    '5'
]);
checkGreaterNumber([
    '10',
    '10'
]);