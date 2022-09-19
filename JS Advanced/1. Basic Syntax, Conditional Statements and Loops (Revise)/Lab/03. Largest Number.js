function maxNumber(...numbers) {
    let result = Math.max(...numbers);

    console.log(`The largest number is ${result}.`);
}

maxNumber(5, -3, 16);
maxNumber(-3, -5, -22.5);