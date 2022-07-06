function calculateFoodCost(input) {
    const dogFood = 2.50;
    const catFood = 4;
    let totalCost = (input[0] * dogFood) + (input[1] * catFood);

    console.log(`${totalCost} lv.`);
}


calculateFoodCost(['5', '4']);
calculateFoodCost(['13', '9']);
