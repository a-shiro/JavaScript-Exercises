function speedCheck(input) {
    let result = '';
    let speed = Number(input[0]);

    if (speed <= 10) {
        result = 'slow';
    } else if (10 < speed && speed <= 50) {
        result = 'average';
    } else if (50 < speed && speed <= 150) {
        result = 'fast';
    } else if (150 < speed && speed <= 1000) {
        result = 'ultra fast';
    } else {
        result = 'extremely fast';
    }

    console.log(result);
}


speedCheck(['8']);
speedCheck(['49.5']);
speedCheck(['126']);
speedCheck(['160']);
speedCheck(['3500']);
