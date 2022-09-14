function solve(product, quantity) {
    let totalPrice;

    switch (product) {
        case 'coffee':
            let coffeePrice = 1.5
            totalPrice = quantity * coffeePrice;
            break;
        case 'water':
            let waterPrice = 1;
            totalPrice = quantity * waterPrice;
            break;
        case 'coke':
            let cokePrice = 1.4;
            totalPrice = quantity * cokePrice;
            break;
        case 'snacks':
            let snacksPrice = 2;
            totalPrice = quantity * snacksPrice;
            break;
    }

    console.log(totalPrice.toFixed(2));
}

solve('water', 5);
solve('coffee', 2);