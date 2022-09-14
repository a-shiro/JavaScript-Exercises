function repeat(word, times) {
    let result = '';

    for (let i = 0; i < times; i++) {
        result += word;
    }
    console.log(result);
}

repeat('abc', 3)