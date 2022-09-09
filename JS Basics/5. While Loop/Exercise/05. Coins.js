function minCoinsReturn(input) {
    let change = 0;
    let coins = Number(input[0]);

    coins *= 100;

    while (coins > 0) {
        if (coins >= 200) {
            coins -= 200;
            change += 1;

        } else if (coins >= 100) {
            coins -= 100;
            change += 1;

        } else if (coins >= 50) {
            coins -= 50;
            change += 1;

        } else if (coins >= 20) {
            coins -= 20;
            change += 1;

        } else if (coins >= 10) {
            coins -= 10;
            change += 1;

        } else if (coins >= 5) {
            coins -= 5;
            change += 1;

        } else if (coins >= 2) {
            coins -= 2;
            change += 1;

        } else if (coins >= 1) {
            coins -= 1;
            change += 1;
        }

        if (coins < 1) {
            break;
        }
    }

    console.log(change);
}

minCoinsReturn(["1.23"]);
minCoinsReturn(["2"]);
minCoinsReturn(["0.56"]);
minCoinsReturn(["2.73"]);