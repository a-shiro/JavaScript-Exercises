function getOscarWinners(input) {
    let nominationPoints = 1250.5;
    let nominated = false;

    let actor = input[0];
    let actorPoints = Number(input[1]);

    for (let i = 3; i <= input.length - 1; i += 2) {
        let judge = input[i];
        let points = Number(input[i + 1]);

        actorPoints += (judge.length * points) / 2

        if (actorPoints > nominationPoints) {
            nominated = true;
            break;
        }
    }

    if (nominated) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
    } else {
        let pointsNeeded = nominationPoints - actorPoints;
        console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
    }
}

getOscarWinners([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);
getOscarWinners([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]);