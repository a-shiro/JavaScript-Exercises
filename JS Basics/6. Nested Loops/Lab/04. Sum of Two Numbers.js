function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let found = false;

    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            counter += 1;
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                found = true;
                break;
            }
        }

        if (found) {
            break;
        }
    }

    if (!found) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers([
    "1",
    "10",
    "5"
]);
sumOfTwoNumbers([
    "23",
    "24",
    "20"
]);