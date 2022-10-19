const {rentCar} = require('./rentCar');
const {expect, assert} = require('chai');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('should throw error if first param is not an array', () => {
            assert.throw(() => rentCar.searchCar("test", 'Tesla'), 'Invalid input!');
        });

        it('should throw error if second param is not a str', () => {
            assert.throw(() => rentCar.searchCar(['Tesla'], 1), 'Invalid input!');
        });

        it('should throw error if no such model of car is found', () => {
            assert.throw(() => rentCar.searchCar(['Tesla', 'Saab'], 'Ford'), 'There are no such models in the catalog!');
        });

        it('should return number of cars found with that model', () => {
            let result = rentCar.searchCar(['Tesla'], 'Tesla');
            expect(result).to.eq(`There is 1 car of model Tesla in the catalog!`);
        });
    })

    describe('calculatePriceOfCar', () => {
        it('should throw error if first param is not a str', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(1, 1), 'Invalid input!');
        })

        it('should throw error if second param is not Int', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Tesla', '1'), 'Invalid input!');
        })

        it('should throw error if model is not in catalog', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Tesla', 1), 'No such model in the catalog!');
        })

        it('should show you the cost of the model you rented', () => {
            let result = rentCar.calculatePriceOfCar('Audi', 2);
            expect(result).to.eq('You choose Audi and it will cost $72!');
        })
    })

    describe('checkBudget', () => {
        it('should throw error if params are not integers', () => {
            assert.throw(() => rentCar.checkBudget('10', 1, 10), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(10, '1', 10), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(10, 1, '10'), 'Invalid input!');
        })

        it('should return that you need a bigger budget if budged < cost', () => {
            let result = rentCar.checkBudget(10, 1, 5);
            expect(result).to.eq('You need a bigger budget!');
        })

        it('should return that you have successfully rented a car', () => {
            let result = rentCar.checkBudget(10, 1, 10);
            expect(result).to.eq('You rent a car!');
        })
    })
})