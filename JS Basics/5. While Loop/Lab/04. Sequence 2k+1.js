function logSequence(input) {
    let n = Number(input[0]);

    let i = 0;

    do {
        i = (i * 2) + 1;
        console.log(i);
    } while ((i * 2) + 1 <= n);
}

logSequence(['3']);
logSequence(['8']);
logSequence(['31']);