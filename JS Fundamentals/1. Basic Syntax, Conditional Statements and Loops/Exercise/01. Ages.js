function solve(age) {
    switch (true) {
        case 0 <= age && age <= 2:
            console.log('baby');
            break;
        case 3 <= age && age <= 13:
            console.log('child');
            break;
        case 14 <= age && age <= 19:
            console.log('teenager');
            break;
        case 20 <= age && age <= 65:
            console.log('adult');
            break;
        case  age >= 66:
            console.log('elder');
            break;
        default:
            console.log('out of bounds');
    }
}

solve(20);
solve(-1);
solve(100);
solve(1);

