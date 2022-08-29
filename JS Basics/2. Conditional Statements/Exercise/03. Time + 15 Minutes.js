function timeAfter15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let total_minutes = minutes + hours * 60 + 15;

    hours = total_minutes / 60;
    minutes = total_minutes % 60;

    if (minutes < 10) {
        console.log(`${Math.floor(hours % 24)}:0${minutes}`);
    } else {
        console.log(`${Math.floor(hours % 24)}:${minutes}`);
    }
}

timeAfter15Minutes([
        '1',
        '46'
    ]
);
timeAfter15Minutes([
    "0",
    "01"
]);
timeAfter15Minutes([
    "23",
    "59"
]);
timeAfter15Minutes([
    "11",
    "08"
]);
timeAfter15Minutes([
    "12",
    "49"
]);