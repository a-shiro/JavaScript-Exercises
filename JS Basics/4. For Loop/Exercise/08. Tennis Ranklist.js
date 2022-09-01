function calcPoints(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let earnedPoints = 0;
    let wins = 0;

    for (let i = 2; i <= input.length - 1; i++) {
        let tournamentPlacement = input[i];

        switch (tournamentPlacement) {
            case 'W':
                earnedPoints += 2000;
                wins += 1;
                break;
            case 'F':
                earnedPoints += 1200;
                break;
            default:
                earnedPoints += 720;
        }
    }

    let averageEarnedPoints = Math.floor(earnedPoints / tournamentsCount);
    let winPercentage = (wins / tournamentsCount) * 100;

    console.log(`Final points: ${startingPoints + earnedPoints}`);
    console.log(`Average points: ${averageEarnedPoints}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}

calcPoints([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
]);
calcPoints([
    "7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"
]);