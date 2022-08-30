function formalResponse(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'm') {
        if (age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }

    } else if (gender === 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    }
}


formalResponse([
    '12',
    'f'
]);
formalResponse([
    '17',
    'm'
]);
formalResponse([
    '25',
    'f'
]);
formalResponse([
    '13.5',
    'm'
]);

