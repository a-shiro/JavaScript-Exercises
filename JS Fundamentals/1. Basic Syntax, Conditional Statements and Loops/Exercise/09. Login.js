function solve(usernames) {
    let username = usernames[0];
    let failedLogins = 0;

    for (let i = 1; i < usernames.length; i++) {
        if (username === usernames[i].split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
            break;
        }

        failedLogins += 1;
        if (failedLogins === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');
    }
}

solve([
    'Acer',
    'login',
    'go',
    'let me in',
    'recA'
]);
solve([
    'momo',
    'omom'
]);
solve([
    'sunny',
    'rainy',
    'cloudy',
    'sunny',
    'not sunny'
]);