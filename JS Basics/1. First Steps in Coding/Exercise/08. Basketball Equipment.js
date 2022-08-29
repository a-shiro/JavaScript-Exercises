function calculateExpenses(input) {
    let yearlyFee = Number(input[0]);

    let sneakerPrice = Number(yearlyFee * 0.6);
    let sweatsuitPrice = Number(sneakerPrice * 0.8);
    let basketballPrice = Number(sweatsuitPrice / 4);
    let accessoriesPrice = Number(basketballPrice / 5);

    let totalExpenses = sneakerPrice + sweatsuitPrice + basketballPrice + accessoriesPrice + yearlyFee;

    console.log(totalExpenses);
}

calculateExpenses(["365"]);
calculateExpenses(["550"]);