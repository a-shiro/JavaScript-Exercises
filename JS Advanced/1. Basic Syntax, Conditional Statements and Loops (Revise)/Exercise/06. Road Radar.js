function solve(speed, area) {
    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (speed <= speedLimits[area]) {
        return `Driving ${speed} km/h in a ${speedLimits[area]} zone`;

    } else {
        let difference = speed - speedLimits[area];
        let status;

        switch (true) {
            case difference <= 20:
                status = 'speeding';
                break;
            case difference <= 40:
                status = 'excessive speeding';
                break;
            default:
                status = 'reckless driving';
                break;
        }

        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`;
    }
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));
