function solve(n) {
    let numberToStr = String(n);
    let result = 0;

    for (let i = 0; i < numberToStr.length; i++) {
        result += Number(numberToStr[i]);
    }
    console.log(result);
}

solve(245678);
solve(97561);