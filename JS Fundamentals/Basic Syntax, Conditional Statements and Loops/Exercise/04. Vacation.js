function solve(people, groupType, day) {
    let individualPrice;

    let stayForFree = 0;

    switch (day) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    individualPrice = 8.45;

                    if (people >= 30) {
                        individualPrice -= individualPrice * 0.15;
                    }
                    break;
                case 'Business':
                    individualPrice = 10.9;

                    if (people >= 100) {
                        stayForFree = individualPrice * 10;
                    }
                    break;

                case 'Regular':
                    individualPrice = 15;

                    if (10 <= people && people <= 20) {
                        individualPrice -= individualPrice * 0.05;
                    }
                    break;
            }
            break;

        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    individualPrice = 9.8;

                    if (people >= 30) {
                        individualPrice -= individualPrice * 0.15;
                    }
                    break;
                case 'Business':
                    individualPrice = 15.6;

                    if (people >= 100) {
                        stayForFree = individualPrice * 10;
                    }
                    break;
                case 'Regular':
                    individualPrice = 20;

                    if (10 <= people && people <= 20) {
                        individualPrice -= individualPrice * 0.05;
                    }
                    break;
            }
            break;

        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    individualPrice = 10.46;

                    if (people >= 30) {
                        individualPrice -= individualPrice * 0.15;
                    }
                    break;
                case 'Business':
                    individualPrice = 16;

                    if (people >= 100) {
                        stayForFree = individualPrice * 10;
                    }
                    break;
                case 'Regular':
                    individualPrice = 22.5;

                    if (10 <= people && people <= 20) {
                        individualPrice -= individualPrice * 0.05;
                    }
                    break;
            }
            break;
    }

    let totalExpenses = (individualPrice * people) - stayForFree
    console.log(`Total price: ${totalExpenses.toFixed(2)}`)
}

solve(
    30,
    "Students",
    "Sunday"
);
solve(
    40,
    "Regular",
    "Saturday"
);