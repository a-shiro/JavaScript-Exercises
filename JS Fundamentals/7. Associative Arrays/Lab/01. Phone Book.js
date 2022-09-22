function solve(input) {
    let objArray = [];

    for (let element of input) {
        let [name, number] = element.split(' ');

        let object = objArray.find(object => object.name === name);

        if (object) {
            object.number = number;
            continue;

        }

        objArray.push({name, number});
    }
    objArray.forEach(object => console.log(`${object.name} -> ${object.number}`));
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);