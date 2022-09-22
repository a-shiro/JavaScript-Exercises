function solve(input) {
    let addressArray = [];

    for (let element of input) {
        let [name, address] = element.split(':');

        let object = addressArray.find(object => object.name === name);

        if (object) {
            object.address = address;
            continue;

        }

        addressArray.push({name, address});
    }
    addressArray.sort((a, b) => a.name.localeCompare(b.name));
    addressArray.forEach(object => console.log(`${object.name} -> ${object.address}`));
}

solve([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);