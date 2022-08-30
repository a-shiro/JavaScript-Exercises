function checkDay(input) {
    let day = input[0];

    switch (day) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;

        default:
            console.log('Error');
    }
}

checkDay(['1']);
checkDay(['2']);
checkDay(['3']);
checkDay(['4']);
checkDay(['5']);
checkDay(['6']);
checkDay(['7']);
checkDay(['-1']);