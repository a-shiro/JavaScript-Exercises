function printDeckOfCards(cards) {
    let result = [];

    for (let card of cards) {
        let validationResult = validateCard(card);

        if (validationResult === 'invalid') {
            console.log(`Invalid card: ${card}`);
            return;
        }

        result.push(validationResult);
    }

    console.log(result.join(' '));

    function validateCard(card) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        let face= card.slice(0, card.length - 1);
        let suit = card[card.length - 1];

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            return 'invalid';
        }

        switch (suit) {
            case 'S':
                suit = '\u2660';
                break;
            case 'H':
                suit = '\u2665';
                break;
            case 'D':
                suit = '\u2666';
                break;
            case 'C':
                suit = '\u2663';
                break;
        }

        return face + suit;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
