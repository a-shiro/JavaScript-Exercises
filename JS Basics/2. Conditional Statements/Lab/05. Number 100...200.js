function between100200(input) {
    let n = Number(input[0]);

    if (n < 100) {
        console.log('Less than 100')
    } else if (100 <= n && n <= 200) {
        console.log('Between 100 and 200')
    } else {
        console.log('Greater than 200')
    }
}

between100200(['95']);
between100200(['120']);
between100200(['210']);