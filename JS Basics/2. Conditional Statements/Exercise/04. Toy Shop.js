function calcProfit(input) {
    let holidayCost = Number(input[0]);

    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let teddyBearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    let puzzlesOrdered = Number(input[1]);
    let dollsOrdered = Number(input[2]);
    let teddyBearsOrdered = Number(input[3]);
    let minionsOrdered = Number(input[4]);
    let trucksOrdered = Number(input[5]);

    let totalOrders = puzzlesOrdered + dollsOrdered + teddyBearsOrdered + minionsOrdered + trucksOrdered;
    let sum = (puzzlesOrdered * puzzlePrice) + (dollsOrdered * dollPrice) + (teddyBearsOrdered * teddyBearPrice) +
        (minionsOrdered * minionPrice) + (trucksOrdered * truckPrice);

    if (totalOrders >= 50) {
        sum -= sum * 0.25;
    }

    sum -= sum * 0.1;

    if (sum >= holidayCost) {
        let moneyLeft = sum - holidayCost
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = holidayCost - sum
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}

calcProfit([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
]);
calcProfit([
    "320",
    "8",
    "2",
    "5",
    "5",
    "1"
]);