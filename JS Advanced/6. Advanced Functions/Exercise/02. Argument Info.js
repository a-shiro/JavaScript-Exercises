function solve(...input) {
    let typesCount = {};

    input.forEach(line => {
        const type = typeof line;

        if (!typesCount.hasOwnProperty(type)) {
            typesCount[type] = 0;
        }

        typesCount[type]++;


        console.log(`${type}: ${line}`);
    })

    typesCount = Object.fromEntries(Object.entries(typesCount).sort(([,a], [,b]) => b - a))

    Object.entries(typesCount).forEach(entry => {
        const [key, value] = entry;

        console.log(`${key} = ${value}`)
    })
}

solve('cat', 42, function () {
    console.log('Hello world!');
})

// solve({ name: 'bob'}, 3.333, 9.999);