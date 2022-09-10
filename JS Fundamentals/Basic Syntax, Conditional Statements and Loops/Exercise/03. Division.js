function solve(n) {
    let divisibleBy;

    switch (true) {
        case n % 10 === 0:
            divisibleBy = 10;
            break;
        case n % 7 === 0:
            divisibleBy = 7;
            break;
        case n % 6 === 0:
            divisibleBy = 6;
            break;
        case n % 3 === 0:
            divisibleBy = 3;
            break;
        case n % 2 === 0:
            divisibleBy = 2;
            break;
    }

    if (divisibleBy) {
        console.log(`The number is divisible by ${divisibleBy}`);
    } else {
        console.log('Not divisible');
    }
}

solve(30)
solve(15)
solve(1643)