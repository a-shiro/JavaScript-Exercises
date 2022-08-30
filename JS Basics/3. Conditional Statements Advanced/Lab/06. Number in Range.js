function numberInRange(input) {
    let n = Number(input[0]);

    if (n !== 0 && n >= -100 && n <= 100) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numberInRange(['-25']);
numberInRange(['0']);
numberInRange(['25']);