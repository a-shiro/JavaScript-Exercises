function excellentGradeCheck(input) {
    let grade = Number(input[0]);

    if(grade >= 5.50) {
        console.log('Excellent!')
    }
}

excellentGradeCheck(['6']);
excellentGradeCheck(['5.5']);
excellentGradeCheck(['3']);