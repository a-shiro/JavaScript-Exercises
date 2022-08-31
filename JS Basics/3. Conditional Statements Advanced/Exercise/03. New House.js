function calcExpenses(input) {
    let rosePrice = 5;
    let dahliaPrice = 3.8;
    let tulipPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;

    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let totalExpenses;

    if (flower === 'Roses') {
        totalExpenses = quantity * rosePrice;

        if (quantity > 80) {
            totalExpenses -= totalExpenses * 0.1;
        }
    } else if (flower === 'Dahlias') {
        totalExpenses = quantity * dahliaPrice;

        if (quantity > 90) {
            totalExpenses -= totalExpenses * 0.15;
        }
    } else if (flower === 'Tulips') {
        totalExpenses = quantity * tulipPrice;

        if (quantity > 80) {
            totalExpenses -= totalExpenses * 0.15;
        }
    } else if (flower === 'Narcissus') {
        totalExpenses = quantity * narcissusPrice;

        if (quantity < 120) {
            totalExpenses += totalExpenses * 0.15;
        }
    } else if (flower === 'Gladiolus') {
        totalExpenses = quantity * gladiolusPrice;

        if (quantity < 80) {
            totalExpenses += totalExpenses * 0.2;
        }
    }

    if (budget - totalExpenses >= 0) {
        let moneyLeft = budget - totalExpenses;
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalExpenses - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

calcExpenses([
    "Roses",
    "55",
    "250"
]);
calcExpenses([
    "Tulips",
    "88",
    "260"
]);
calcExpenses([
    "Narcissus",
    "119",
    "360"
]);