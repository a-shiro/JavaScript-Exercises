function calcTime(input) {
    let worldRecordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSec = Number(input[2]);

    let needToSwim = distance * timeInSec;
    let addedLateTime = Math.floor(distance / 15) * 12.5;
    let totalTime = needToSwim + addedLateTime;


    if (totalTime >= worldRecordInSeconds) {
        let failedBy = totalTime - worldRecordInSeconds;
        console.log(`No, he failed! He was ${failedBy.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

calcTime([
    "10464",
    "1500",
    "20"
]);
calcTime([
    "55555.67",
    "3017",
    "5.03"
]);