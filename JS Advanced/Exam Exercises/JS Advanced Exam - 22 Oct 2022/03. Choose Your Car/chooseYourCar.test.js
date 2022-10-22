const {chooseYourCar} = require('./chooseYourCar');
const {expect, assert} = require('chai');

describe('choseYourCar', () => {
    describe('choosingType', () => {
        it('should throw an error if year is below 1900', () => {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'green', 1899), "Invalid Year!");
        })

        it('should throw an error if year is above 2022', () => {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'green', 2023), "Invalid Year!");
        })

        it('should throw an error if type is not Sedan', () => {
            assert.throw(() => chooseYourCar.choosingType('SUV', 'green', 2015), "This type of car is not what you are looking for.");
        })

        it('should return that the car it too old for you if year is below 2010', () => {
            let result = chooseYourCar.choosingType('Sedan', 'green', 2009);
            expect(result).to.eq(`This Sedan is too old for you, especially with that green color.`);
        })

        it('should return that the car meets your requirements if year is >= 2010', () => {
            let result = chooseYourCar.choosingType('Sedan', 'green', 2010);
            expect(result).to.eq(`This green Sedan meets the requirements, that you have.`);
        })
    })
    describe('brandName', () => {
        it('should throw an error if first param is not an array', () => {
            assert.throw(() => chooseYourCar.brandName('NotAnArray', 1), "Invalid Information!");
        })
        it('should throw an error if second param is not a number', () => {
            assert.throw(() => chooseYourCar.brandName(['Audi'], '1'), "Invalid Information!");
        })
        it('should throw an error if second param is a negative number', () => {
            assert.throw(() => chooseYourCar.brandName(['Audi'], -1), "Invalid Information!");
        })
        it('should throw an error if second param >= number than the length of the first param', () => {
            assert.throw(() => chooseYourCar.brandName(['Audi'], 1), "Invalid Information!");
        })

        it('should return string of brand names', () => {
            let result = chooseYourCar.brandName(['Audi', 'BMW', 'Mercedes'], 0)
            expect(result).to.eq('BMW, Mercedes');
        })
    })

    describe('carFuelConsumption', () => {
        it('should throw an error if first param is not a number', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption('10', 1), "Invalid Information!");
        })

        it('should throw an error if first param <= 0', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 1), "Invalid Information!");
        })

        it('should throw an error if second param is not a number', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(10, '1'), "Invalid Information!");
        })

        it('should throw an error if second param <= 0', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(10, 0), "Invalid Information!");
        })

        it('should return that the trip is not possible', () => {
           let result = chooseYourCar.carFuelConsumption(50, 10);
           expect(result).to.eq('The car burns too much fuel - 20.00 liters!')
        })

        it('should return that the trip is possible', () => {
            let result = chooseYourCar.carFuelConsumption(50, 3.5);
            expect(result).to.eq(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        })

        it('should return that the trip is possible', () => {
            let result = chooseYourCar.carFuelConsumption(50, 3);
            expect(result).to.eq(`The car is efficient enough, it burns 6.00 liters/100 km.`)
        })
    })
})