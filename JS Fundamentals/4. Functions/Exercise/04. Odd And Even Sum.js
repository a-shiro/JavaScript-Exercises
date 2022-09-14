function solve(number) {
    let evenSum = 0;
    let oddSum = 0;

    let string = String(number);

    for (let i = 0; i < string.length; i++) {
        let number = Number(string[i]);

        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);