function solve(...array) {
    let negativeCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeCount += 1;
        }
    }
    console.log(negativeCount % 2 === 0 ? 'Positive' : 'Negative');
}

// Check without multiplying numbers

solve(5, 12, -15);
solve(-6, -12, 14);
solve(6, 6, 6);