function solve(n) {
    let numberToStr = String(n);
    let result = 0;

    for(let i = 0; i < numberToStr.length; i++) {
        result += Number(numberToStr[i]);
    }

    let resultToStr = String(result);
    let isAmazing = resultToStr.includes('9') ? 'True': 'False';

    console.log(`${n} Amazing? ${isAmazing}`);
}

solve(1233);
solve(999);