function solve(n) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    let result = 0 < n && n <= 7 ? days[n - 1] : 'Invalid day!';

    console.log(result);
}

solve(3);
solve(11);
solve(6);