function createCard(cardFace, cardSuit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(cardFace.toString())) {
        throw new Error('Error')
    }

    if (!validSuits.includes(cardSuit.toString())) {
        throw new Error('Error')
    }

    switch (cardSuit) {
        case 'S': cardSuit = '\u2660'; break;
        case 'H': cardSuit = '\u2665'; break;
        case 'D': cardSuit = '\u2666'; break;
        case 'C': cardSuit = '\u2663'; break;
    }

    return {
        face: cardFace,
        suit: cardSuit,
        toString () {
            return this.face + this.suit;
        }
    }
}

let card = createCard('10', 'C');
console.log(card.toString());