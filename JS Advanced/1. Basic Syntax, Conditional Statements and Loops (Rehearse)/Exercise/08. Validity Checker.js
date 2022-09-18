function solve(x1, y1, x2, y2) {
    let calculate = function (a, b) {
        return Math.sqrt(a ** 2 + b ** 2)
    };

    let distances = [];
    distances.push(calculate(x1, y1));
    distances.push(calculate(x2, y2));
    distances.push(calculate(Math.abs(x1 - x2), Math.abs(y1 - y2)));


    for (let [idx, distance] of distances.entries()) {
        let toCompare1 = idx !== 1 ? `{${x1}, ${y1}}` : `{${x2}, ${y2}}`
        let toCompare2 = idx < 2 ? '{0, 0}' : `{${x2}, ${y2}}`;

        if (distance === Math.trunc(distance)) {
            console.log(`${toCompare1} to ${toCompare2} is valid`);

        } else {
            console.log(`${toCompare1} to ${toCompare2} is invalid`);
        }
    }
}

solve(3, 0, 0, 4);

