function solve(...numbers) {
    let [n, m] = numbers.map(Number);
    let total = 0;

    for (let i = n; i <= m; i++) {
        total += i;
    }

    console.log(total);
}

solve('1', '5');
solve('-8', '20');