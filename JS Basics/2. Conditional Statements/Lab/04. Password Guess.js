function passwordGuess(input) {
    let password = 's3cr3t!P@ssw0rd';

    let givenPassword = input[0];

    if (givenPassword === password) {
        console.log('Welcome')
    } else {
        console.log('Wrong password!')
    }
}

passwordGuess(['qwerty']);
passwordGuess(['s3cr3t!P@ssw0rd']);
passwordGuess(['s3cr3t!p@ss']);

