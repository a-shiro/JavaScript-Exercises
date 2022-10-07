const {lookupChar} = require('../03. Char Lookup');
const {expect} = require('chai');


describe('lookupChar', () => {
    it('should return undefined if the first param is not a string', () => {
        let result = lookupChar(true, 1);

        expect(result).to.eq(undefined);
    })

    it('should return undefined if the second param is not a integer', () => {
        let result = lookupChar('test', true);

        expect(result).to.eq(undefined);
    })

    it('should return undefined if the second param is a float', () => {
        let result = lookupChar('test', 1.5);

        expect(result).to.eq(undefined);
    })

    it('should return incorrect index if the string length is less than or eq to the idx', () => {
        let result = lookupChar('test', 5);

        expect(result).to.eq('Incorrect index');
    })

    it('should return incorrect index if the idx is less than 0', () => {
        let result = lookupChar('test', -1);

        expect(result).to.eq('Incorrect index');
    })

    it('should return letter at given index', () => {
        let result = lookupChar('test', 1);

        expect(result).to.eq('e');
    })
})