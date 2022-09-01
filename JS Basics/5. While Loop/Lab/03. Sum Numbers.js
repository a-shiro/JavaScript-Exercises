function sumNumbers(input) {
    let targetN = Number(input[0]);

    let i = 1;
    let result = 0;

    while (result < targetN) {
        let n = Number(input[i]);

        result += n;
        i += 1;
    }

    console.log(result);
}

sumNumbers([
    "20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]);
sumNumbers([
    "100",
    "10",
    "20",
    "30",
    "40"
]);