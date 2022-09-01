function trekkingGroup(input) {
    let mountainPeaks = [0, 0, 0, 0, 0];
    let totalPeople = 0;

    let groupCount = Number(input[0]);

    for (let i = 1; i <= groupCount; i++) {
        let groupCount = Number(input[i]);
        totalPeople += groupCount;

        if (0 <= groupCount && groupCount <= 5) {
            mountainPeaks[0] += groupCount;

        } else if (6 <= groupCount && groupCount <= 12) {
            mountainPeaks[1] += groupCount;

        } else if (13 <= groupCount && groupCount <= 25) {
            mountainPeaks[2] += groupCount;

        } else if (26 <= groupCount && groupCount <= 40) {
            mountainPeaks[3] += groupCount;

        } else {
            mountainPeaks[4] += groupCount;
        }
    }

    for (let i = 0; i <= 4; i++) {
        console.log(`${((mountainPeaks[i] / totalPeople) * 100).toFixed(2)}%`);
    }
}

trekkingGroup([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
]);