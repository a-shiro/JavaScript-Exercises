function countCakeSlices(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);

    let totalCake = cakeLength * cakeWidth;

    let cakePiece = input[2];
    let i = 3;

    while (cakePiece !== 'STOP') {
        cakePiece = Number(cakePiece);

        if (totalCake < cakePiece) {
            break;
        }

        totalCake -= cakePiece;

        cakePiece = input[i];
        i += 1;
    }

    if (cakePiece === 'STOP') {
        console.log(`${totalCake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${cakePiece - totalCake} pieces more.`);
    }
}

countCakeSlices([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);
countCakeSlices([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);