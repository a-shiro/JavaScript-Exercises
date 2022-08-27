function depositCalculator(input) {
    let depositedAmount = Number(input[0])
    let termDeposit = input[1]
    let yearlyInterestPercent = Number(input[2]) / 100;

    let accumulatedInterest = depositedAmount * yearlyInterestPercent;
    let monthlyInterest = accumulatedInterest / 12;
    let totalSum = depositedAmount + (termDeposit * monthlyInterest);

    console.log(totalSum);
}


depositCalculator([
    "200",
    "3",
    "5.7"
]);
depositCalculator([
    "2350",
    "6",
    "7"
]);

