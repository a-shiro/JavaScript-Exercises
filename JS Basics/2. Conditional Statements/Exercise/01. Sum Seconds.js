function sumSeconds(input) {
    let firstCompetitor = Number(input[0]);
    let secondCompetitor = Number(input[1]);
    let thirdCompetitor = Number(input[2]);

    let totalTime = firstCompetitor + secondCompetitor + thirdCompetitor

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(
    [
        '35',
        '45',
        '44'
    ]
);
sumSeconds([
    "22",
    "7",
    "34"
]);
sumSeconds([
    "14",
    "12",
    "10"
]);
sumSeconds([
    "50",
    "50",
    "49"
]);