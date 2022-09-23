function solve(array) {
    let parkingLot = [];

    for (let pair of array) {
        let [direction, plateId] = pair.split(', ');

        switch (direction) {
            case 'IN':
                if (!parkingLot.includes(plateId)) {
                    parkingLot.push(plateId);
                }
                break;
            case 'OUT':
                if (parkingLot.includes(plateId)) {
                    let idx = parkingLot.indexOf(plateId);
                    parkingLot.splice(idx, 1);
                }
                break;
        }
    }

    parkingLot.length === 0 ? console.log('Parking Lot is Empty') : parkingLot.sort().forEach(id => console.log(id));
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);