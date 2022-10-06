const {rgbToHexColor} = require('../06. RGB to Hex');
const {expect} = require('chai');

describe('rgbTest', () => {
    it('should have params that are not below 0', () => {
        let result = rgbToHexColor(100, -250, 100);
        expect(result).to.be.equal(undefined);
    });

    it('should have params that are not above 255', () => {
        let result = rgbToHexColor(100, 250, 400);
        expect(result).to.be.equal(undefined);
    })

    it('should return a correctly formatted answer', () => {
        let result = rgbToHexColor(255, 255, 255);
        expect(result).to.be.equal('#FFFFFF');
    })

    it('should work with floating point integers', () => {
        let result = rgbToHexColor(0.0, 0.0, 0.0)
        expect(result).to.be.equal('#000000');
    });
})
