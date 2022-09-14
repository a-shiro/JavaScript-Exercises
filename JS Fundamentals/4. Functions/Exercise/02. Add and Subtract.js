function calculate(n1, n2, n3) {
    let sum = (n1, n2) => n1 + n2;
    let subtract = (sum, n3) => sum - n3;

    let res = subtract(sum(n1, n2), n3);
    console.log(res);
}

calculate(10, 10, 10)

