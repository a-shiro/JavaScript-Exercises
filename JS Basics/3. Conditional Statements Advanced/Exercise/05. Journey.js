function calcExpenses(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let housingType;
    let expenses;

    switch (true) {
        case budget <= 100:
            destination = 'Bulgaria';

            if (season === 'summer') {
                housingType = 'Camp';
                expenses = budget * 0.3;
            } else {
                housingType = 'Hotel';
                expenses = budget * 0.7;
            }

            break;
        case budget <= 1000:
            destination = 'Balkans';

            if (season === 'summer') {
                housingType = 'Camp';
                expenses = budget * 0.4;
            } else {
                housingType = 'Hotel';
                expenses = budget * 0.8;
            }

            break
        case budget > 1000:
            destination = 'Europe';
            housingType = 'Hotel';
            expenses = budget * 0.9;
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${housingType} - ${expenses.toFixed(2)}`);
}

calcExpenses([
    '50',
    'summer'
]);
calcExpenses([
    '75',
    'winter'
]);
calcExpenses([
    '312',
    'summer'
]);
calcExpenses([
    '678.53',
    'winter'
]);
calcExpenses([
    '1500',
    'summer'
]);