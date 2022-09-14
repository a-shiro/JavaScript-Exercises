function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let result = '';
        for (let j = 0; j < n; j++) {
            result += `${n} `;
        }
        console.log(result);
    }
}

printMatrix(7);