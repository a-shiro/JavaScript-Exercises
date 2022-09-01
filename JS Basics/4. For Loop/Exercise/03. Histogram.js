function histogram(input) {
    let percentages = [0, 0, 0, 0, 0];

    let nCount = Number(input[0]);

    for (let i = 1; i <= nCount; i++) {
        let number = Number(input[i]);

        if (number < 200) {
            percentages[0] += 1;

        } else if (200 <= number && number < 400) {
            percentages[1] += 1;

        } else if (400 <= number && number < 600) {
            percentages[2] += 1;

        } else if (600 <= number && number < 800) {
            percentages[3] += 1;

        } else {
            percentages[4] += 1;
        }
    }

    for (let i = 0; i <= 4; i++) {
        console.log(`${(percentages[i] / nCount * 100).toFixed(2)}%`);
    }
}

histogram([
    "3",
    "1",
    "2",
    "999"
]);
histogram([
    "7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"
]);