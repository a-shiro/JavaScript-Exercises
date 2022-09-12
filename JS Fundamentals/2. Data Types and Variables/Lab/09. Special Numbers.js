function solve(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let numberToStr = String(i);

        for (let j = 0; j < numberToStr.length; j++) {
            sum += Number(numberToStr[j]);
        }

        switch (sum) {
            case 5:
            case 7:
            case 11:
                console.log(`${numberToStr} -> True`);
                break
            default:
                console.log(`${numberToStr} -> False`);
        }
        sum = 0;
    }
}

solve(15);
