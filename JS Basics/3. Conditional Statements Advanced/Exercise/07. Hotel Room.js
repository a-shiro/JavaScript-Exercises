function calcExpenses(input) {
    let month = input[0];
    let days = Number(input[1]);

    let studioPrice;
    let apartmentPrice;

    let studioExpenses;
    let apartmentExpenses;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;

            studioExpenses = days * studioPrice;
            apartmentExpenses = days * apartmentPrice;

            if (days > 14) {
                studioExpenses -= studioExpenses * 0.3;
                apartmentExpenses -= apartmentExpenses * 0.1;

            } else if (days > 7) {
                studioExpenses -= studioExpenses * 0.05;
            }
            break;

        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            studioExpenses = days * studioPrice;
            apartmentExpenses = days * apartmentPrice;

            if (days > 14) {
                studioExpenses -= studioExpenses * 0.2;
                apartmentExpenses -= apartmentExpenses * 0.1;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;

            studioExpenses = days * studioPrice;
            apartmentExpenses = days * apartmentPrice;

            if (days > 14) {
                apartmentExpenses -= apartmentExpenses * 0.1;
            }
            break;
    }

    console.log(`Apartment: ${apartmentExpenses.toFixed(2)} lv.`);
    console.log(`Studio: ${studioExpenses.toFixed(2)} lv.`);
}

calcExpenses([
    "May",
    "15"
]);
calcExpenses([
    "June",
    "14"
]);
calcExpenses([
    "August",
    "20"
]);