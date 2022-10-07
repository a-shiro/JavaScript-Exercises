const {mathEnforcer} = require('../04. Math Enforcer');
const {expect} = require('chai');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined if given param is not a number', () => {
            let result = mathEnforcer.addFive('5');

            expect(result).to.eq(undefined);
        })

        it('should return the result of the given number + 5', () => {
            let result = mathEnforcer.addFive(5);

            expect(result).to.eq(10);
        })

        it('should return the result of the given float + 5', () => {
            let result = mathEnforcer.addFive(1.5);

            expect(result).to.eq(6.5);
        })

        it('should return the result of the given negative number + 5', () => {
            let result = mathEnforcer.addFive(-5);

            expect(result).to.eq(0);
        })
    })

    describe('subtractTen', () => {
        it('should return undefined if given param is not a number', () => {
            let result = mathEnforcer.subtractTen('10');

            expect(result).to.eq(undefined);
        })

        it('should return the result of the given number - 10', () => {
            let result = mathEnforcer.subtractTen(20);

            expect(result).to.eq(10);
        })

        it('should return the result of the given float - 10', () => {
            let result = mathEnforcer.subtractTen(10.5);

            expect(result).to.eq(0.5);
        })

        it('should return the result of the given negative number + 10', () => {
            let result = mathEnforcer.subtractTen(-10);

            expect(result).to.eq(-20);
        })
    })

    describe('sum', () => {
        it('should return undefined if first param is not a number', () => {
            let result = mathEnforcer.sum('10', 10);

            expect(result).to.eq(undefined);
        })

        it('should return undefined if second param is not a number', () => {
            let result = mathEnforcer.sum(10, '10');

            expect(result).to.eq(undefined);
        })

        it('should return the sum of the two numbers', () => {
            let result = mathEnforcer.sum(10, 10);

            expect(result).to.eq(20);
        })

        it('should return the sum of the first number + second number(float)', () => {
            let result = mathEnforcer.sum(10.5, 10);

            expect(result).to.eq(20.5);
        })

        it('should return the sum of the first number(float) + second number', () => {
            let result = mathEnforcer.sum(10, 10.5);

            expect(result).to.eq(20.5);
        })
    })
})
