function isOpen(input) {
    let time = Number(input[0]);
    let day = input[1];

    let isOpen = true;

    switch (day) {
        case 'Sunday':
            isOpen = false;
            break;
    }

    switch (true) {
        case 10 > time || 18 < time:
            isOpen = false;
            break;
    }

    if (isOpen) {
        console.log('open');
    } else {
        console.log('closed');
    }
}

isOpen([
    '11',
    'Monday'
]);
isOpen([
    '19',
    'Friday'
]);
isOpen([
    '11',
    'Sunday'
]);