function calcBankBalance(input) {
    let i = 0;
    let balance = 0;

    while (true) {
        let operation = Number(input[i]);

        if (isNaN(operation)) {
            break;

        } else {
            if (operation < 0) {
                console.log(`Invalid operation!`);
                break;
            }

            balance += operation;
            console.log(`Increase: ${operation.toFixed(2)}`);
            i += 1;
        }
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

calcBankBalance([
    "5.51",
    "69.42",
    "100",
    "NoMoreMoney"
]);
calcBankBalance([
    "120",
    "45.55",
    "-150"
])