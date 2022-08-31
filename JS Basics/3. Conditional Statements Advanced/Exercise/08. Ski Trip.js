function calcExpenses(input) {
    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let days = Number(input[0]) - 1;
    let housingType = input[1];
    let review = input[2];

    let expenses;

    if (housingType === 'apartment') {
        expenses = days * apartmentPrice;

        if (days < 10) {
            expenses -= expenses * 0.3;

        } else if (10 <= days && days <= 15) {
            expenses -= expenses * 0.35;

        } else {
            expenses -= expenses * 0.5;
        }

    } else if (housingType === 'president apartment') {
        expenses = days * presidentApartmentPrice;

        if (days < 10) {
            expenses -= expenses * 0.1;

        } else if (10 <= days && days <= 15) {
            expenses -= expenses * 0.15;

        } else {
            expenses -= expenses * 0.2;
        }

    } else {
        expenses = days * roomForOnePersonPrice;
    }

    if (review === 'positive') {
        expenses += expenses * 0.25;
    } else {
        expenses -= expenses * 0.1;
    }

    console.log(expenses.toFixed(2));
}

calcExpenses([
    "30",
    "president apartment",
    "negative"
]);
calcExpenses([
    "14",
    "apartment",
    "positive"
]);
calcExpenses([
    "12",
    "room for one person",
    "positive"
]);
calcExpenses([
    "2",
    "apartment",
    "positive"
]);