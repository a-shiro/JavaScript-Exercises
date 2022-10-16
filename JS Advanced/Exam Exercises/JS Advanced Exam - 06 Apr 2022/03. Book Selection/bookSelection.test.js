const {bookSelection} = require('./bookSelection');
const {expect, assert} = require('chai');
const {carService} = require("../../JS Advanced Exam - 25 Jun 2022/03. Car Service/carService");

describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
        it('should return unsuitable if age is >= 12 and genre is Horror or Thriller', () => {
            let genres = ['Horror', 'Thriller'];

            for (let genre of genres) {
                let result = bookSelection.isGenreSuitable(genre, 10);
                expect(result).to.eq(`Books with ${genre} genre are not suitable for kids at 10 age`);
            }
        })

        it('should return suitable if genre is not Horror or Thriller', () => {
            let result = bookSelection.isGenreSuitable('Comedy', 10);
            expect(result).to.eq(`Those books are suitable`);
        })
    })

    describe('isItAffordable', () => {
        it('should throw an error if price or budget is not a number', () => {
            assert.throw(() => bookSelection.isItAffordable('1', '1', 'Invalid input'));
        })

        it('should return not enough money if result is below 0', () => {
            let result = bookSelection.isItAffordable(2, 1);
            expect(result).to.eq("You don't have enough money")
        })

        it('should return book bought, money left if price >= 0', () => {
            let result = bookSelection.isItAffordable(0.5, 1);
            expect(result).to.eq('Book bought. You have 0.5$ left')
        })
    })

    describe('suitableTitles', () => {
        it('should throw an error if first param is not an array or second param is not a str', () => {
            assert.throw(() => bookSelection.suitableTitles('notAnArray', 1, 'Invalid input'));
        });

        it('should return array with requested genres', () => {
            let result = bookSelection.suitableTitles([{title: 'Horror Story', genre: 'Horror'}], 'Horror');
            expect(result).to.deep.equal(['Horror Story'])
        });

    })
})