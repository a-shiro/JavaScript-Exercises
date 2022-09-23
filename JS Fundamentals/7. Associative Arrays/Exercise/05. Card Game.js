function solve(array) {
    function calculate(name, cards) {
        let player = players.find(object => object.name === name);

        if (!player) {
            let score = 0;
            let usedCards = [];

            player = {name, score, usedCards};
            players.push(player);
        }

        for (let card of cards.split(', ')) {
            let cardType = card.length === 2 ? card[0] : card[0] + card[1];
            let cardMultiplier = card.length === 2 ? card[1] : card[2];

            if (player.usedCards.includes(card)) {
                continue;
            }

            player.usedCards.push(card);
            player.score += cardPower[cardType] * multipliers[cardMultiplier];
        }
    }

    const multipliers = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
    const cardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let players = [];

    for (let element of array) {
        let [name, cards] = element.split(': ');

        calculate(name, cards);
    }

    players.forEach(object => console.log(`${object.name}: ${object.score}`));
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);