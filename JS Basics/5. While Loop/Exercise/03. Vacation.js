function calcMoney(input) {
    let moneyNeeded = Number(input[0]);
    let funds = Number(input[1]);

    let action;
    let amount;

    let spendCounter = 0;
    let daysCount = 0;

    let i = 2;

    while (moneyNeeded > funds && spendCounter < 5) {
        action = input[i];
        amount = Number(input[i + 1]);

        daysCount += 1;

        if (action === 'spend') {
            funds = funds - amount < 0 ? 0 : funds - amount;
            spendCounter += 1;

        } else {
            funds += amount;
            spendCounter = 0;
        }
        i += 2;
    }

    if (spendCounter === 5) {
        console.log("You can't save the money.");
        console.log(daysCount);
    } else {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}

calcMoney([
    "2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);
calcMoney([
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
]);
calcMoney([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
]);