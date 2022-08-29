function calcMoviesExpenses(input) {
    let movieBudget = Number(input[0]);
    let movieExtras = Number(input[1]);
    let outfitPerPersonPrice = Number(input[2]);


    if (movieExtras > 150) {
        outfitPerPersonPrice -= outfitPerPersonPrice * 0.1;
    }

    let totalOutfitExpenses = outfitPerPersonPrice * movieExtras;
    let movieDecorsCost = movieBudget * 0.1;

    let totalExpenses = movieDecorsCost + totalOutfitExpenses;

    if (totalExpenses > movieBudget) {
        let moneyNeeded = totalExpenses - movieBudget;

        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);

    } else if (totalExpenses <= movieBudget) {
        let moneyLeft = movieBudget - totalExpenses;

        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

calcMoviesExpenses([
    '20000',
    '120',
    '55.5'
]);
calcMoviesExpenses([
    "15437.62",
    "186",
    "57.99"
]);
calcMoviesExpenses([
    "9587.88",
    "222",
    "55.68"
]);
