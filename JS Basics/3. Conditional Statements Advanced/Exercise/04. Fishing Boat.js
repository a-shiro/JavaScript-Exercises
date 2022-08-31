function calcExpenses(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);

    let shipRent;

    switch (season) {
        case 'Spring':
            shipRent = 3000;
            break;

        case 'Summer':
        case 'Autumn':
            shipRent = 4200;
            break;

        case 'Winter':
            shipRent = 2600;
            break;
    }

    if (season !== 'Autumn' && people % 2 === 0) {
        shipRent -= shipRent * 0.05;
    }

    switch (true) {
        case people <= 6:
            shipRent -= shipRent * 0.1;
            break;
        case 7 <= people && people <= 11:
            shipRent -= shipRent * 0.15;
            break;
        case people >= 12:
            shipRent -= shipRent * 0.25;
            break;
    }

    if (shipRent > budget) {
        let moneyNeeded = shipRent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    } else {
        let moneyLeft = budget - shipRent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }
}

calcExpenses([
    "3000",
    "Summer",
    "11"
]);

calcExpenses([
    "3600",
    "Autumn",
    "6"
]);
calcExpenses([
    "2000",
    "Winter",
    "13"
]);