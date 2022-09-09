function numbersBetween(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let printLine = '';

    for (let i = n1; i <= n2; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNum = '' + i;

        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
}

numbersBetween([
    "100000",
    "100050"
]);
numbersBetween([
    "123456",
    "124000"
]);