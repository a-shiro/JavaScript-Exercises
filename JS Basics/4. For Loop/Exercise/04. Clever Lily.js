function calcMoney(input) {
    let budget = 0;

    let age = Number(input[0]);
    let moneyNeeded = Number(input[1]);
    let toyPrice = Number(input[2]);

    let income = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            budget += toyPrice;
        } else {
            let moneyStolen = 1;

            budget += income;
            budget -= moneyStolen;

            income += 10;
        }
    }

    if (budget >= moneyNeeded) {
        let moneyLeft = budget - moneyNeeded;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyNeeded -= budget;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

calcMoney([
    "10",
    "170.00",
    "6"
]);
calcMoney([
    "21",
    "1570.98",
    "3"
]);