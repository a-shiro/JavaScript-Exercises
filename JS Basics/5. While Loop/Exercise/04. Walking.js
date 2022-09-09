function trackSteps(input) {
    let stepsCounter = 0;
    let steps;
    let i = 0;

    while (true) {
        steps = input[i];

        if (steps === 'Going home') {
            let stepsGoingHome = Number(input[i + 1]);
            stepsCounter += stepsGoingHome;
            break;

        } else {
            steps = Number(input[i]);
            stepsCounter += steps;

            if (stepsCounter >= 10000) {
                break;
            }
        }

        i += 1
    }

    if (stepsCounter >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsCounter - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - stepsCounter} more steps to reach goal.`);
    }
}

trackSteps([
    "1000",
    "1500",
    "2000",
    "6500"
]);
trackSteps([
    "1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
]);