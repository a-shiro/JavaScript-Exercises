const {carService} = require('./carService');
const {expect, assert} = require('chai');


describe('carService', () => {
    describe('isItExpensive', () => {
        it('should return that fix will be more expensive with "Engine" str given', () => {
            let result = carService.isItExpensive('Engine');

            expect(result).to.eq('The issue with the car is more severe and it will cost more money')
        })

        it('should return that fix will be more expensive with "Transmission" str given', () => {
            let result = carService.isItExpensive('Engine');

            expect(result).to.eq('The issue with the car is more severe and it will cost more money')
        })

        it('should return that fix will be cheaper', () => {
            let result = carService.isItExpensive('Fuel Pump');

            expect(result).to.eq('The overall price will be a bit cheaper')
        })
    })

    describe('discount', () => {
        it('should throw error "Invalid input" if first param is not a number', () => {
            assert.throw(() => carService.discount('NaN', 1), 'Invalid input')
        })

        it('should throw error "Invalid input" if second param is not a number', () => {
            assert.throw(() => carService.discount(1, 'NaN'), 'Invalid input')
        })

        it('should return "You cannot apply a discount" if first param is <= 2', () => {
            let result = carService.discount(1, 1);

            expect(result).to.eq('You cannot apply a discount');
        })

        it('should return applied discount (15%)', () => {
            let result = carService.discount(3, 100)
            expect(result).to.eq('Discount applied! You saved 15$')

            result = carService.discount(7, 100)
            expect(result).to.eq('Discount applied! You saved 15$')
        })

        it('should return applied discount (30%)', () => {
            let result = carService.discount(8, 100)
            expect(result).to.eq('Discount applied! You saved 30$')

            result = carService.discount(10, 100)
            expect(result).to.eq('Discount applied! You saved 30$')
        })
    })

    describe('partsToBuy', () => {
        it('should throw error "Invalid input" if params are not an array', () => {
            assert.throw(() => carService.partsToBuy('NotArray', ['Asd'], 'Invalid input'))
            assert.throw(() => carService.partsToBuy(["test"], 1), "Invalid input");
        })

        it("should return correct total sum", () => {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "injectors"]
                ),
                145
            );
            assert.equal(
                carService.partsToBuy(
                    [],
                    ["blowoff valve", "injectors"]
                ),
                0
            );
        });
    })
})
