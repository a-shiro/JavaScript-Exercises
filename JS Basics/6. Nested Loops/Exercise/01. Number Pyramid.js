function drawPyramid(input) {
    let n = Number(input[0]);

    let number = 0;
    let currentNumber = 1;
    let isCurrentBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        let result = '';

        for (let cols = 1; cols <= rows; cols++) {
            number += 1;
            currentNumber = number;

            if (currentNumber > n) {
                isCurrentBigger = true;
                break;
            }
            result += `${number} `;
        }

        console.log(result);

        if (isCurrentBigger) {
            break;
        }
    }
}

drawPyramid(['7']);
drawPyramid(['12']);