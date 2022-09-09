function sumNumbers(input) {
    let command = input[0];

    let sumPrime = 0;
    let sumNoNPrime = 0;

    let i = 0;

    while (command !== 'stop') {
        let n = Number(command)
        let isPrime = true;

        if (n === 1) {
            i += 1;
            command = input[i];
            continue;
        }

        if (n < 0) {
            console.log('Number is negative.');

        } else {
            for (let j = 2; j < n; j++) {
                if (n % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                sumPrime += n;

            } else {
                sumNoNPrime += n;
            }
        }

        i+= 1;
        command = input[i];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNoNPrime}`);
}

sumNumbers([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
]);
sumNumbers([
    "30",
    "83",
    "33",
    "-1",
    "20",
    "stop"
]);
sumNumbers([
    "0",
    "-9",
    "0",
    "stop"
]);