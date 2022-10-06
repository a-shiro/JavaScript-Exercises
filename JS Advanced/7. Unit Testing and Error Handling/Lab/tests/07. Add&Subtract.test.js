const {createCalculator} = require('../07. Add&Subtract')
const {expect} = require('chai')

describe('createCalculator', () => {
    it('creates a calculator object when function is called', () => {
        let calculator = createCalculator()

        expect(calculator).to.have.property('add');
        expect(calculator).to.have.property('subtract');
        expect(calculator).to.have.property('get');
    })

    it('should return its internal value', () => {
        let calculator = createCalculator()

        let result = calculator.get();

        expect(result).to.be.equal(0);
    })

    it('should add when given a number', ()=> {
        let calculator = createCalculator()

        calculator.add(1)

        let result = calculator.get()

        expect(result).to.be.equal(1)
    })

    it('should add when given a string that is a number', ()=> {
        let calculator = createCalculator()

        calculator.add('1')

        let result = calculator.get()

        expect(result).to.be.equal(1)
    })

    it('should subtract when given a number', ()=> {
        let calculator = createCalculator()

        calculator.subtract(1)

        let result = calculator.get()

        expect(result).to.be.equal(-1)
    })

    it('should subtract when given a string that is a number', ()=> {
        let calculator = createCalculator()

        calculator.subtract('1')

        let result = calculator.get()

        expect(result).to.be.equal(-1)
    })
})