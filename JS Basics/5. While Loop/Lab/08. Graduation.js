function calcAverageGrade(input) {
    let student = input[0];

    let failed = 0;
    let classNumber = 0;

    let result = 0;
    let i = 1;

    while (failed < 2) {
        classNumber += 1;

        let grade = Number(input[i]);

        if (grade >= 4) {
            result += grade;
            if (classNumber === 12) {
                break;
            }
        } else {
            failed += 1;
        }

        i += 1;
    }

    if (classNumber === 12) {
        let averageGrade = result / classNumber;
        console.log(`${student} graduated. Average grade: ${averageGrade.toFixed(2)}`);

    } else {
        console.log(`${student} has been excluded at ${classNumber - 1} grade`);
    }
}

calcAverageGrade([
    "Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
]);
calcAverageGrade([
    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);