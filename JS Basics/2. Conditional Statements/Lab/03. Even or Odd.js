function evenOddChecker(input) {
    let n = Number(input[0]);

    if (n % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOddChecker(['2'])
evenOddChecker(['3'])
evenOddChecker(['25'])
evenOddChecker(['1024'])