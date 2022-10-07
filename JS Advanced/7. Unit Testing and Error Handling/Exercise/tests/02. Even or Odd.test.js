const {isOddOrEven} = require('../02. Even or Odd');
const {expect} = require('chai');

describe('isOddOrEven', () => {
    it('should return undefined if given number for a value', () => {
        let result = isOddOrEven(5);

        expect(result).to.be.equal(undefined);
    })

    it('should return undefined if given boolean for a value', () => {
        let result = isOddOrEven(true);

        expect(result).to.be.equal(undefined);
    })

    it('should return odd if given string with an odd length', () => {
        let result = isOddOrEven('asd');

        expect(result).to.be.equal('odd');
    })

    it('should return even if given string with an even length', () => {
        let result = isOddOrEven('asda');

        expect(result).to.be.equal('even');
    })
})
