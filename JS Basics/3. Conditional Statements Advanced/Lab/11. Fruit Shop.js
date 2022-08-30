function calcWeeklyPrices(input) {
    let bananaPrice;
    let applePrice;
    let orangePrice;
    let grapefruitPrice;
    let kiwiPrice;
    let pineapplePrice;
    let grapesPrice;


    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let error = false

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            bananaPrice = 2.5;
            applePrice = 1.2;
            orangePrice = 0.85;
            grapefruitPrice = 1.45;
            kiwiPrice = 2.7;
            pineapplePrice = 5.5;
            grapesPrice = 3.85;
            break

        case 'Saturday':
        case 'Sunday':
            bananaPrice = 2.7;
            applePrice = 1.25;
            orangePrice = 0.9;
            grapefruitPrice = 1.6;
            kiwiPrice = 3;
            pineapplePrice = 5.6;
            grapesPrice = 4.2;
            break;

        default:
            error = true
    }

    let purchased;

    switch (product) {
        case 'banana':
            purchased = bananaPrice;
            break;
        case 'apple':
            purchased = applePrice;
            break;
        case 'orange':
            purchased = orangePrice;
            break;
        case 'grapefruit':
            purchased = grapefruitPrice;
            break;
        case 'kiwi':
            purchased = kiwiPrice;
            break;
        case 'pineapple':
            purchased = pineapplePrice;
            break;
        case 'grapes':
            purchased = grapesPrice;
            break;

        default:
            error = true
    }

    if (error) {
        console.log('error')

    } else {
        console.log((quantity * purchased).toFixed(2));
    }
}


calcWeeklyPrices([
    'apple',
    'Tuesday',
    '2'
]);
calcWeeklyPrices([
    "orange",
    "Sunday",
    "3"
]);
calcWeeklyPrices([
    "kiwi",
    "Monday",
    "2.5"
]);