function solve(dayType, age) {
    let price;

    switch (dayType) {
        case 'Weekday':
            switch (true) {
                case 18 < age && age <= 64:
                    price = 18;
                    break;
                case (0 <= age && age <= 18) || (64 < age && age <= 122):
                    price = 12;
                    break;
                default:
                    console.log('Error!');
            }
            break;

        case 'Weekend':
            switch (true) {
                case (0 <= age && age <= 18) || (64 < age && age <= 122):
                    price = 15;
                    break;
                case 18 < age && age <= 64:
                    price = 20;
                    break;
                default:
                    console.log('Error!');
            }
            break;

        case 'Holiday':
            switch (true) {
                case 0 <= age && age <= 18:
                    price = 5;
                    break;
                case 18 < age && age <= 64:
                    price = 12;
                    break;
                case  64 < age && age <= 122:
                    price = 10;
                    break;
                default:
                    console.log('Error!');
            }
            break;
    }
    if (price) {
        console.log(`${price}$`);
    }
}

solve(
    'Weekday',
    42
);
solve(
    'Holiday',
    -12
);
solve(
    'Holiday',
    15
);
solve(
    'Weekend',
    15
);