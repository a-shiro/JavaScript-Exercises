function calcExpenses(input) {
    let coffeePrice;
    let waterPrice;
    let beerPrice;
    let sweetsPrice;
    let peanutsPrice;
    let purchase;

    let product = input[0];
    let town = input[1];
    let quantity = input[2];

    switch (town) {
        case 'Sofia':
            coffeePrice = 0.5;
            waterPrice = 0.8;
            beerPrice = 1.2;
            sweetsPrice = 1.45;
            peanutsPrice = 1.6;
            break;
        case 'Plovdiv':
            coffeePrice = 0.4;
            waterPrice = 0.7;
            beerPrice = 1.15;
            sweetsPrice = 1.30;
            peanutsPrice = 1.5;
            break;
        case 'Varna':
            coffeePrice = 0.45;
            waterPrice = 0.7;
            beerPrice = 1.1;
            sweetsPrice = 1.35;
            peanutsPrice = 1.55;
            break;
    }

    switch (product) {
        case 'coffee':
            purchase = coffeePrice;
            break;
        case 'water':
            purchase = waterPrice;
            break;
        case 'beer':
            purchase = beerPrice;
            break;
        case 'sweets':
            purchase = sweetsPrice;
            break;
        case 'peanuts':
            purchase = peanutsPrice;
            break;
    }

    let totalExpenses = quantity * purchase;

    console.log(totalExpenses);
}

calcExpenses([
    "coffee",
    "Varna",
    "2"
]);
calcExpenses([
    "peanuts",
    "Plovdiv",
    "1"
]);
calcExpenses([
    "beer",
    "Sofia",
    "2"
]);
calcExpenses([
    "water",
    "Plovdiv",
    "2"
]);