function solve(...input) {
    let [fruit, weight, kgPrice] = input;
    let kg =  weight / 1000;
    let moneyNeeded = kgPrice * kg;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);