function solve(n) {
    let percent = Math.round(n / 10);
    let percentLeft = 10;
    percentLeft -= percent;

    let loadedOutput = '%'.repeat(percent);
    let unloadedOutput = '.'.repeat(percentLeft);

    let result = loadedOutput + unloadedOutput;

    if (n < 100) {
        console.log(`${n}% [${result}]`)
        console.log('Still loading...');
    } else {
        console.log('100% Complete!')
        console.log(`[${loadedOutput}]`);
    }
}

solve(4)
solve(10)
solve(100)