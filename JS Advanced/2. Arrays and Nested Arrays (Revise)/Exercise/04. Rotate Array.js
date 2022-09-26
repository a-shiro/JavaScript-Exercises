function rotate(array, nTimes) {
    for (let i = 0; i < nTimes; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(...array);
}

rotate(['1', '2', '3', '4'], 2);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);