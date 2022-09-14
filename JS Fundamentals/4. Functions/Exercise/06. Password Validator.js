function validatePassword(password) {
    function isLetter(char){
        return char.toLowerCase() != char.toUpperCase();
    }

    function checkLength(text){
        return text.length >= 6 && text.length <= 10;
    }

    let valid = true;
    let messages = [];

    if (!checkLength(password)) {
        valid = false;
        messages.push('Password must be between 6 and 10 characters');
    }

    let digitCounter = 0;

    for (let i = 0; i < password.length; i++) {
        let char = password[i]

        if (!isLetter(char) && isNaN(char)) {
            valid = false;
            messages.push('Password must consist only of letters and digits');
            break;
        }

        char = parseInt(password[i]);

        if (!isNaN(char)) {
            digitCounter += 1;
        }
    }

    if (digitCounter < 2) {
        valid = false;
        messages.push('Password must have at least 2 digits');
    }

    if (!valid) {
        console.log(messages.join('\n'));
    } else  {
        console.log('Password is valid');
    }
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');
