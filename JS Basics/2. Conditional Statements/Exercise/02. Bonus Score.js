function calcBonusPoints(input) {
    let points = Number(input[0]);
    let bonusPoints = 0;

    if (points <= 100) {
        bonusPoints = 5;

    } else if (points > 1000) {
        bonusPoints = points * 0.1;

    } else if (points > 100) {
        bonusPoints = points * 0.2;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 === 5) {
        bonusPoints += 2;
    }

    points += bonusPoints;

    console.log(bonusPoints);
    console.log(points);
}

calcBonusPoints(['20']);
calcBonusPoints(['175']);
calcBonusPoints(['2703']);
calcBonusPoints(['15875']);