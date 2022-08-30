function calcExpenses(input) {
    let budget = Number(input[0]);

    let graphicsCards = Number(input[1]);
    let cpus = Number(input[2]);
    let ram = Number(input[3]);

    let graphicsCardPrice = 250;
    let cpuPrice = (graphicsCards * graphicsCardPrice) * 0.35;
    let ramPrice = (graphicsCards * graphicsCardPrice) * 0.1;

    let totalExpenses = (graphicsCards * graphicsCardPrice) + (cpus * cpuPrice) + (ram * ramPrice);

    if (graphicsCards > cpus) {
        totalExpenses -= totalExpenses * 0.15;
    }

    if (totalExpenses <= budget) {
        console.log(`You have ${(budget - totalExpenses).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalExpenses - budget).toFixed(2)} leva more!`);
    }
}

calcExpenses([
    '900',
    '2',
    '1',
    '3'
]);
calcExpenses([
    '920.45',
    '3',
    '1',
    '1'
]);