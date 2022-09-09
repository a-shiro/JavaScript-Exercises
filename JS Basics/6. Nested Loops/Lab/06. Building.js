function displayRooms(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let floorResults = '';
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                floorResults += `L${i}${j} `;
            } else if (i % 2 === 0) {
                floorResults += `O${i}${j} `;
            } else if (i % 2 !== 0) {
                floorResults += `A${i}${j} `;
            }
        }
        console.log(floorResults);
    }
}

displayRooms([
    '6',
    '4'
]);
displayRooms([
    '9',
    '5'
]);
displayRooms([
    '4',
    '4'
]);