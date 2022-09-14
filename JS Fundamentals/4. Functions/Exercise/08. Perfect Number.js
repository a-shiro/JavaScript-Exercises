function solve(n) {
    let positiveDivisors = [];

    for (let i = n - 1; i > 0; i--) {
        if (n % i === 0) {
            positiveDivisors.push(i);
        }
    }

    let sum = 0
    for (let i = 0; i < positiveDivisors.length; i++) {
        sum += positiveDivisors[i];
    }

    console.log(sum === n ? 'We have a perfect number!' : "It's not so perfect.");
}

solve(6)
solve(1236498)