function drawTriangle(n) {
    let i = 1;

    while (i <= n) {
        let result = '';

        for (let j = 1; j <= i; j++) {
            result += `${i} `;
        }

        console.log(result);
        i++;
    }
}

drawTriangle(3);
drawTriangle(5);