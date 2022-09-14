function minNumber(...numbers) {
    let result = numbers => Math.min(...numbers);
    console.log(result(numbers));
}

minNumber(2, 5, 3);