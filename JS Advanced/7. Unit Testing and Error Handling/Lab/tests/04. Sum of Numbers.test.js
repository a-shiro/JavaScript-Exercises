const { expect } = require('chai');
const {sum} = require("../04. Sum of Numbers");

describe('sum', () => {
    it('function returns correct result with array of numbers', () => {
        // Arrange
        let array = [1, 2, 3];

        //Act
        let result = sum(array);

        //Assert
        expect(result).to.be.equal(6);
    })
})