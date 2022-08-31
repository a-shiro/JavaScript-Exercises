function calcIncome(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income;

    switch (type) {
        case 'Premiere':
            income = (rows * cols) * 12;
            break;
        case 'Normal':
            income = (rows * cols) * 7.5;
            break;
        case 'Discount':
            income = (rows * cols) * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

calcIncome([
    "Premiere",
    "10",
    "12"
]);
calcIncome([
    "Normal",
    "21",
    "13"
]);
calcIncome([
    "Discount",
    "12",
    "30"
]);

