function calcGrades(input) {
    let maxBadGrades = Number(input[0]);

    let lastExercise;
    let badGradesCount = 0;

    let totalExercises = 0;
    let totalGradesResult = 0;

    let i = 1;

    let exerciseName = input[i];
    let grade = Number(input[i + 1]);

    while (true) {
        totalExercises += 1;
        totalGradesResult += grade;

        if(grade <= 4) {
            badGradesCount += 1;

            if (badGradesCount === maxBadGrades) {
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                return;
            }
        }

        lastExercise = exerciseName;

        i += 2;

        exerciseName = input[i];

        if (exerciseName === 'Enough') {
            break;
        }

        grade = Number(input[i + 1]);
    }

    console.log(`Average score: ${(totalGradesResult / totalExercises).toFixed(2)}`);
    console.log(`Number of problems: ${totalExercises}`);
    console.log(`Last problem: ${lastExercise}`);
}

calcGrades([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);
calcGrades([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);
