function calcTime(input) {
    let tvSeriesName = input[0];
    let lengthOfEpisode = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let chillTime = breakTime / 4;

    let timeLeft = breakTime - (lunchTime + chillTime);

    if (timeLeft >= lengthOfEpisode) {
        console.log(`You have enough time to watch ${tvSeriesName} and left with ${Math.ceil(timeLeft - lengthOfEpisode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeriesName}, you need ${Math.ceil(lengthOfEpisode - timeLeft)} more minutes.`);
    }
}

calcTime([
    "Game of Thrones",
    "60",
    "96"
]);
calcTime([
    "Teen Wolf",
    "48",
    "60"
]);