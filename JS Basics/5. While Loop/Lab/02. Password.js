function enterPassword(input) {
    let username = input[0];
    let password = input[1];

    let enteredPassword;
    let i = 2;

    do {
        enteredPassword = input[i];
        i += 1;
    } while (password !== enteredPassword)

    console.log(`Welcome ${username}!`);
}

enterPassword([
    "Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"
]);
enterPassword([
    "Gosho",
    "secret",
    "secret"
]);