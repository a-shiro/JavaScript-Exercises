function calcCommission(input) {
    let commission

    let town = input[0];
    let sales = Number(input[1]);

    if (town === 'Sofia') {
        if (0 <= sales && sales <= 500) {
            commission = sales * 0.05
        } else if (500 < sales && sales <= 1000) {
            commission = sales * 0.07
        } else if (1000 < sales && sales <= 10000) {
            commission = sales * 0.08
        } else {
            commission = sales * 0.12
        }
    } else if (town === 'Varna') {
        if (0 <= sales && sales <= 500) {
            commission = sales * 0.045
        } else if (500 < sales && sales <= 1000) {
            commission = sales * 0.075
        } else if (1000 < sales && sales <= 10000) {
            commission = sales * 0.1
        } else {
            commission = sales * 0.13
        }
    } else if (town === 'Plovdiv') {
        if (0 <= sales && sales <= 500) {
            commission = sales * 0.055
        } else if (500 < sales && sales <= 1000) {
            commission = sales * 0.08
        } else if (1000 < sales && sales <= 10000) {
            commission = sales * 0.12
        } else {
            commission = sales * 0.145
        }
    }

    if (!commission || commission < 0) {
        console.log('error')
    } else {
        console.log(commission.toFixed(2))
    }
}

calcCommission([
    "Sofia",
    "1500"
]);
calcCommission([
    "Plovdiv",
    "499.99"
]);
calcCommission([
    "Varna",
    "3874.50"
]);
calcCommission([
    "Kaspichan",
    "-50"
]);