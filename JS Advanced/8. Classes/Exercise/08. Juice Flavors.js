function juiceFlavors(input) {
    let flavours = new Map();
    let bottles = new Map();

    for (let line of input) {
        let [flavour, qty] = line.split(' => ');
        qty = Number(qty);

        if (!flavours.has(flavour)) {
            flavours[flavour] = 0;
        }
        flavours[flavour] += qty;

        if (flavours[flavour] >= 1000) {
            if (!bottles.has(flavour)) {
                bottles.set(flavour, 0);
            }
            bottles.set(flavour, bottles.get(flavour) +flavours[flavour] / 1000);
            flavours[flavour] %= 1000;
        }
        flavours.set(flavour, flavours[flavour] + qty);
    }

    for (let [flavour, bottleQty] of bottles) {
        console.log(flavour + ' => ' + Math.trunc(bottleQty));
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);