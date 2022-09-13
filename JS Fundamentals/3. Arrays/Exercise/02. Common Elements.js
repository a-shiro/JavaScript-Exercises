function solve(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            console.log(array1[i]);
        }
    }
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);