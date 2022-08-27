function summerReading(input) {
    let pagesCount = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTimeNeeded = pagesCount / pagesReadPerHour;

    let requiredHoursPerDay = totalTimeNeeded / days;

    console.log(requiredHoursPerDay);
}

summerReading([
    '212',
    '20',
    '2'
]);

summerReading([
    "432",
    "15",
    "4"
]);