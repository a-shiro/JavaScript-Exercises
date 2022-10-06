const {expect} = require('chai');
const {isSymmetric} = require('../05. Check for Symmetry');

describe('isSymmetric', () => {
    it('should take an array as an input', () => {
        let result = isSymmetric(['a', 's', 'd']);
        expect(result).to.be.equal(false)
    })

    it('should return true when given input is symmetric', () => {
        let result = isSymmetric(['a', 's', 'a']);

        expect(result).to.be.equal(true);
    })

    it('should return false when given input is not symmetric', () => {
        let result = isSymmetric(['a', 's', 'd', 'd']);

        expect(result).to.be.equal(false);
    })

    it('should return false when given a string param', () => {
        let result = isSymmetric('asd');

        expect(result).to.be.equal(false);
    })

    it('should return false when type of elements in array are mismatched', () => {
        let result = isSymmetric([1, 2, '1']);

        expect(result).to.be.equal(false);
    })
})