function chooseOutfit(input) {
    let degrees = Number(input[0]);
    let time = input[1];

    let outfit
    let shoes

    if (time === 'Morning') {
        if (10 <= degrees && degrees <= 18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (10 < degrees && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }

    } else if (time === 'Afternoon') {
        if (10 <= degrees && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (10 < degrees && degrees <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }

    } else if (time === 'Evening') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}


chooseOutfit([
    "16",
    "Morning"
]);
chooseOutfit([
    "22",
    "Afternoon"
]);
chooseOutfit([
    "28",
    "Evening"
]);