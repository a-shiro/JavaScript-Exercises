function solve(input) {
    let studentsArray = [];

    for (let element of input) {
        let tokens = element.split(' ');

        let name = tokens.shift();
        let grades = tokens.map(Number)

        let student = studentsArray.find(object => object.name === name);

        if (student) {
            student.grades.push(...grades);
            continue;
        }

        studentsArray.push({name, grades});
    }

    for (let student of studentsArray) {
        let gradeSum = student.grades.reduce((total, n) => total + n, 0);
        student.grades = gradeSum / student.grades.length;
    }

    studentsArray.sort((a, b) => a.name.localeCompare(b.name));
    studentsArray.forEach(object => console.log(`${object.name}: ${object.grades.toFixed(2)}`));
}

solve([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])