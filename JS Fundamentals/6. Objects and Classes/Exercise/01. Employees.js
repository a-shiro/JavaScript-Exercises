function solve(input) {
    let employees = [];

    for (let employee of input) {
        let name = employee;
        let id = employee.length;

        employees.push({name, id});
    }

    employees.forEach(object => console.log(`Name: ${object.name} -- Personal Number: ${object.id}`));
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);