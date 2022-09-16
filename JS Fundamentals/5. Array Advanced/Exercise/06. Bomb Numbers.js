function solve(field, bomb) {
    let checkBombIdx = element => field.indexOf(element);

    let [bombNumber, bombRadius] = bomb;

    let bombIdx = checkBombIdx(bombNumber);

    while (bombIdx !== -1) {
        let startIdx = bombIdx - bombRadius;

        if(startIdx < 0){
            field.splice(0, (bombIdx + bombRadius) + 1);

        }else{
            field.splice(startIdx, (bombRadius * 2) + 1);
        }

        bombIdx = checkBombIdx(bombNumber);
    }

    let resultSum = field.reduce((x, y) => x + y, 0);
    console.log(resultSum);
}

solve([1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 3]
);
solve(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
solve(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
solve([1, 7, 7, 1, 2, 3],
    [7, 1]
);
solve(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);